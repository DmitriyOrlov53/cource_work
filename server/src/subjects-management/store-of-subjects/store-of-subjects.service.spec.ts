import { Test, TestingModule } from '@nestjs/testing';
import { StoreOfSubjectsService } from './store-of-subjects.service';

describe('StoreOfSubjectsService', () => {
  let service: StoreOfSubjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreOfSubjectsService],
    }).compile();

    service = module.get<StoreOfSubjectsService>(StoreOfSubjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
