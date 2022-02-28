import { Test, TestingModule } from '@nestjs/testing';
import { ScryfallCardFaceService } from './scryfall-card-face.service';

describe('ScryfallCardFaceService', () => {
  let service: ScryfallCardFaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScryfallCardFaceService],
    }).compile();

    service = module.get<ScryfallCardFaceService>(ScryfallCardFaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
