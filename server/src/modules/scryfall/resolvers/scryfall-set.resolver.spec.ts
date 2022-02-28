import { Test, TestingModule } from '@nestjs/testing';
import { ScryfallSetResolver } from './scryfall-set.resolver';

describe('ScryfallSetResolver', () => {
  let resolver: ScryfallSetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScryfallSetResolver],
    }).compile();

    resolver = module.get<ScryfallSetResolver>(ScryfallSetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
