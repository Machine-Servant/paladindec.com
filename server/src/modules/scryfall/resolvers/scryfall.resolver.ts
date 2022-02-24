import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BulkDataObjectType } from '../object-types/bulk-data.object-type';
import { BulkDataService } from '../services/bulk-data.service';

@Resolver()
export class ScryfallResolver {
  constructor(private readonly bulkDataService: BulkDataService) {}

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
}
