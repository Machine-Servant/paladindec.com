import { Test, TestingModule } from '@nestjs/testing';
import { ScryfallResolver } from './scryfall.resolver';

describe('ScryfallResolver', () => {
  let resolver: ScryfallResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScryfallResolver],
    }).compile();

    resolver = module.get<ScryfallResolver>(ScryfallResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
