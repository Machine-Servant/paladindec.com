import { Test, TestingModule } from '@nestjs/testing';
import { SetDataService } from './set-data.service';

describe('SetDataService', () => {
  let service: SetDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetDataService],
    }).compile();

    service = module.get<SetDataService>(SetDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
