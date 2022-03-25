import { Test, TestingModule } from '@nestjs/testing';
import { ScryfallDailyProcessLogService } from './scryfall-daily-process-log.service';

describe('ScryfallDailyProcessLogService', () => {
  let service: ScryfallDailyProcessLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScryfallDailyProcessLogService],
    }).compile();

    service = module.get<ScryfallDailyProcessLogService>(
      ScryfallDailyProcessLogService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
