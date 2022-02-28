import { Test, TestingModule } from '@nestjs/testing';
import { ScryfallPriceService } from './scryfall-price.service';

describe('ScryfallPriceService', () => {
  let service: ScryfallPriceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScryfallPriceService],
    }).compile();

    service = module.get<ScryfallPriceService>(ScryfallPriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
