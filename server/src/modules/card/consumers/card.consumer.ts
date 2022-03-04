import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
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

    try {
      const cardCount = await this.scryfallCardService.getCount();

      const batchSize = 100;
      const totalBatches = Math.ceil(cardCount / batchSize);

      for (let i = 0; i < totalBatches; i++) {
        this.logger.debug(`Processing #${i + 1} of ${totalBatches}`);
        const batch = await this.scryfallCardService.findMany({
          take: batchSize,
          skip: i * batchSize,
        });
        await Promise.all(
          batch.map(async (card) => {
            try {
              const currentPrice =
                await this.scryfallPriceService.findMostRecentPriceForCard(
                  card.id,
                );
              if (currentPrice) {
                return await this.cardService.upsert({
                  scryfallCard: { connect: { id: card.id } },
                  currentPrice: { connect: { id: currentPrice.id } },
                  isBorderless: card.frameEffects.includes('borderless'),
                  isShowcase: card.frameEffects.includes('showcase'),
                  isPaper: card.games.includes('paper'),
                  collectorNumber: card.collectorNumber,
                  canBeFoil: card.finishes.includes('foil'),
                });
              }
              return;
            } catch (err) {
              this.logger.error(err);
              this.logger.error(card);
              throw err;
            }
          }),
        );
        this.logger.debug(`Processed #${i + 1}`);
      }
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed(err);
      throw err;
    }

    this.logger.debug(`Finished processing PaladinDeck Card list`);
    job.moveToCompleted('done', true);
  }
}
