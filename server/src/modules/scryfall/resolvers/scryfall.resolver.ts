import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BulkDataObjectType } from '../object-types/bulk-data.object-type';
import { BulkDataService } from '../services/bulk-data.service';
import { ScryfallPriceService } from '../services/scryfall-price.service';
import { SetDataService } from '../services/set-data.service';

@Resolver()
export class ScryfallResolver {
  constructor(
    private readonly bulkDataService: BulkDataService,
    private readonly setDataService: SetDataService,
    private readonly scryfallPriceService: ScryfallPriceService,
  ) {}

  @Query(() => String)
  async getString(): Promise<string> {
    return 'hello';
  }

  @Query(() => [BulkDataObjectType])
  async allBulkData(): Promise<BulkDataObjectType[]> {
    return this.bulkDataService.getBulkData();
  }

  @Mutation(() => Boolean)
  async downloadBulkData(@Args('typeName') typeName: string): Promise<boolean> {
    return this.bulkDataService.download(typeName);
  }

  @Mutation(() => Boolean)
  async processBulkData(@Args('fileName') fileName: string): Promise<boolean> {
    return this.bulkDataService.process(fileName);
  }

  @Mutation(() => Boolean)
  async processSetData(): Promise<boolean> {
    return this.setDataService.process();
  }

  @Mutation(() => Boolean)
  async processCardFaces(): Promise<boolean> {
    return this.bulkDataService.processCardFaceData();
  }

  @Mutation(() => Boolean)
  async processAllParts(): Promise<boolean> {
    return this.bulkDataService.processAllPartsData();
  }

  @Mutation(() => Boolean)
  async processPriceData(): Promise<boolean> {
    return this.scryfallPriceService.process();
  }
}
