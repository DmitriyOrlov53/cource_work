import { Test, TestingModule } from '@nestjs/testing';
import { StoreOfClerksService } from './store-of-clerks.service';

describe('StoreOfClerksService', () => {
  let service: StoreOfClerksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreOfClerksService],
    }).compile();

    service = module.get<StoreOfClerksService>(StoreOfClerksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
