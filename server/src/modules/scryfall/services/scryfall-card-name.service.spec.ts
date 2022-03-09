import { Test, TestingModule } from '@nestjs/testing';
import { ScryfallCardNameService } from './scryfall-card-name.service';

describe('ScryfallCardNameService', () => {
  let service: ScryfallCardNameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScryfallCardNameService],
    }).compile();

    service = module.get<ScryfallCardNameService>(ScryfallCardNameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
