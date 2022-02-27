import { Test, TestingModule } from '@nestjs/testing';
import { SetResolver } from './set.resolver';

describe('SetResolver', () => {
  let resolver: SetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetResolver],
    }).compile();

    resolver = module.get<SetResolver>(SetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
