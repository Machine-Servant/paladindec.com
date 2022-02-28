import { Test, TestingModule } from '@nestjs/testing';
import { ScryfallRelatedCardResolver } from './scryfall-related-card.resolver';

describe('ScryfallRelatedCardResolver', () => {
  let resolver: ScryfallRelatedCardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScryfallRelatedCardResolver],
    }).compile();

    resolver = module.get<ScryfallRelatedCardResolver>(
      ScryfallRelatedCardResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
