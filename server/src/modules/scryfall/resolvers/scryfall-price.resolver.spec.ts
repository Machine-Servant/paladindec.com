import { Test, TestingModule } from '@nestjs/testing';
import { ScryfallPriceResolver } from './scryfall-price.resolver';

describe('ScryfallPriceResolver', () => {
  let resolver: ScryfallPriceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScryfallPriceResolver],
    }).compile();

    resolver = module.get<ScryfallPriceResolver>(ScryfallPriceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
