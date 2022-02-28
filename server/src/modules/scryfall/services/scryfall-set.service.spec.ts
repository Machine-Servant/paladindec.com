import { Test, TestingModule } from '@nestjs/testing';
import { ScryfallSetService } from './scryfall-set.service';

describe('ScryfallSetService', () => {
  let service: ScryfallSetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScryfallSetService],
    }).compile();

    service = module.get<ScryfallSetService>(ScryfallSetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
