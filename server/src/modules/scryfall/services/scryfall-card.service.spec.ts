import { Test, TestingModule } from '@nestjs/testing';
import { ScryfallCardService } from './scryfall-card.service';

describe('ScryfallCardService', () => {
  let service: ScryfallCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScryfallCardService],
    }).compile();

    service = module.get<ScryfallCardService>(ScryfallCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
