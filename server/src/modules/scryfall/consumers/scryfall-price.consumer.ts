import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Job } from 'bull';
import { chunk } from 'lodash';
import { ScryfallPriceUncheckedCreateInput } from '../../../@generated/prisma-nestjs-graphql/scryfall-price/scryfall-price-unchecked-create.input';
import { ScryfallCardService } from '../services/scryfall-card.service';
import { ScryfallPriceService } from '../services/scryfall-price.service';

type PriceJsonData = {
  eur: string;
  tix: string;
  usd: string;
  eur_foil: string;
  usd_foil: string;
  usd_etched: string;
};

function isPriceJsonData(input: Prisma.JsonValue): input is PriceJsonData {
  if (!input) return false;
  return (
    input.hasOwnProperty('eur') &&
    input.hasOwnProperty('tix') &&
    input.hasOwnProperty('usd') &&
    input.hasOwnProperty('eur_foil') &&
    input.hasOwnProperty('usd_foil') &&
    input.hasOwnProperty('usd_etched')
  );
}

@Processor('price-data')
export class ScryfallPriceConsumer {
  constructor(
    private readonly scryfallPriceService: ScryfallPriceService,
    private readonly scryfallCardService: ScryfallCardService,
  ) {}

  private readonly logger = new Logger(ScryfallPriceConsumer.name);

  @Process('process')
  async processPriceData(job: Job) {
    this.logger.debug(`Processing price data for all cards`);

    this.logger.debug(`Fetching all cards`);
    const allCards = await this.scryfallCardService.findMany();
    this.logger.debug(`Fetched #${allCards.length} Card objects`);

    const batches = chunk(allCards, 100);
    const batchLength = batches.length;
    let batchCount = 0;

    const date = new Date();

    try {
      while (batches.length) {
        this.logger.debug(
          `Processing price data batch #${++batchCount} of ${batchLength}`,
        );
        const batch = batches.shift();

        await Promise.all(
          batch.map(async (card) => {
            const prices = card.prices;

            if (!isPriceJsonData(prices)) return;

            const priceData: ScryfallPriceUncheckedCreateInput = {
              date,
              cardId: card.id,
              eur: Number(prices.eur),
              tix: Number(prices.tix),
              usd: Number(prices.usd),
              eurFoil: Number(prices.eur_foil),
              usdFoil: Number(prices.usd_foil),
              usdEtched: Number(prices.usd_etched),
            };

            try {
              const results = await this.scryfallPriceService.create(priceData);
              return results;
            } catch (err) {
              this.logger.error(err, priceData);
              job.moveToFailed(err);
              throw err;
            }
          }),
        );

        this.logger.debug(`Processed ${batchCount}`);
      }
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed(err);
      throw err;
    }

    job.moveToCompleted('done', true);
  }
}
