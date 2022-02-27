import { Test, TestingModule } from '@nestjs/testing';
import { CardFaceService } from './card-face.service';

describe('CardFaceService', () => {
  let service: CardFaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardFaceService],
    }).compile();

    service = module.get<CardFaceService>(CardFaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
