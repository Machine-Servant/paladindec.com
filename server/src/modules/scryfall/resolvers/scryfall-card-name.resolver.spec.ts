import { Test, TestingModule } from '@nestjs/testing';
import { ScryfallCardNameResolver } from './scryfall-card-name.resolver';

describe('ScryfallCardNameResolver', () => {
  let resolver: ScryfallCardNameResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScryfallCardNameResolver],
    }).compile();

    resolver = module.get<ScryfallCardNameResolver>(ScryfallCardNameResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
