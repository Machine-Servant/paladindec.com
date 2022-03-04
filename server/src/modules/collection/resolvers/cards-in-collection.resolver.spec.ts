import { Test, TestingModule } from '@nestjs/testing';
import { CardsInCollectionResolver } from './cards-in-collection.resolver';

describe('CardsInCollectionResolver', () => {
  let resolver: CardsInCollectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardsInCollectionResolver],
    }).compile();

    resolver = module.get<CardsInCollectionResolver>(CardsInCollectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
