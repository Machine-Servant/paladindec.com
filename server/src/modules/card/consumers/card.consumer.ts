import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { chunk } from 'lodash';
import { UpsertOneCardArgs } from '../../../@generated/prisma-nestjs-graphql/card/upsert-one-card.args';
import { ScryfallCardService } from '../../scryfall/services/scryfall-card.service';
import { ScryfallPriceService } from '../../scryfall/services/scryfall-price.service';
import { CardService } from '../services/card.service';

@Processor('card')
export class CardConsumer {
  constructor(
    private readonly cardService: CardService,
    private readonly scryfallCardService: ScryfallCardService,
    private readonly scryfallPriceService: ScryfallPriceService,
  ) {}

  private readonly logger = new Logger(CardConsumer.name);

  @Process('update-card-list')
  async processUpdateCardList(job: Job) {
    this.logger.debug(
      `Updating PaladinDeck Card list based on Scryfall cards in database`,
    );
    this.logger.debug(`Fetching ScryfallCard results`);

    const allScryfallCards = await this.scryfallCardService.findMany();

    this.logger.debug(`Found #${allScryfallCards.length} results`);

    const batches = chunk(allScryfallCards, 100);
    let batchCount = 0;

    this.logger.debug(`Processing #${batches.length} chunks`);

    while (batches.length) {
      this.logger.debug(`Processing batch #${++batchCount}`);
      const batch = batches.shift();

      await Promise.all(
        batch.map(async (scryfallCard) => {
          const currentPrice =
            await this.scryfallPriceService.findMostRecentPriceForCard(
              scryfallCard.id,
            );
          return await this.cardService.upsert({
            scryfallCard: { connect: { id: scryfallCard.id } },
            currentPrice: { connect: { id: currentPrice.id } },
          });
        }),
      );

      this.logger.debug(`Processed #${batchCount}`);
    }

    this.logger.debug(`Finished processing PaladinDeck Card list`);
  }
}
