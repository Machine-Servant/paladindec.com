import { Test, TestingModule } from '@nestjs/testing';
import { BulkDataService } from './bulk-data.service';

describe('BulkDataService', () => {
  let service: BulkDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BulkDataService],
    }).compile();

    service = module.get<BulkDataService>(BulkDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
