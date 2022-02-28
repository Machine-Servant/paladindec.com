import { Test, TestingModule } from '@nestjs/testing';
import { ScryfallCardResolver } from './scryfall-card.resolver';

describe('ScryfallCardResolver', () => {
  let resolver: ScryfallCardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScryfallCardResolver],
    }).compile();

    resolver = module.get<ScryfallCardResolver>(ScryfallCardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
