import { Test, TestingModule } from '@nestjs/testing';
import { ScryfallRelatedCardService } from './scryfall-related-card.service';

describe('ScryfallRelatedCardService', () => {
  let service: ScryfallRelatedCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScryfallRelatedCardService],
    }).compile();

    service = module.get<ScryfallRelatedCardService>(
      ScryfallRelatedCardService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
