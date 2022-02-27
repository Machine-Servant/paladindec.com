import { Test, TestingModule } from '@nestjs/testing';
import { RelatedCardService } from './related-card.service';

describe('RelatedCardService', () => {
  let service: RelatedCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelatedCardService],
    }).compile();

    service = module.get<RelatedCardService>(RelatedCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
