import { Test, TestingModule } from '@nestjs/testing';
import { RelatedCardResolver } from './related-card.resolver';

describe('RelatedCardResolver', () => {
  let resolver: RelatedCardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelatedCardResolver],
    }).compile();

    resolver = module.get<RelatedCardResolver>(RelatedCardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
