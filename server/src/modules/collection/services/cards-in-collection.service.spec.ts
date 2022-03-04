import { Test, TestingModule } from '@nestjs/testing';
import { CardsInCollectionService } from './cards-in-collection.service';

describe('CardsInCollectionService', () => {
  let service: CardsInCollectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardsInCollectionService],
    }).compile();

    service = module.get<CardsInCollectionService>(CardsInCollectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
