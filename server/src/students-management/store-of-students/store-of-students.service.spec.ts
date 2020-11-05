import { Test, TestingModule } from '@nestjs/testing';
import { StoreOfStudentsService } from './store-of-students.service';

describe('StoreOfStudentsService', () => {
  let service: StoreOfStudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreOfStudentsService],
    }).compile();

    service = module.get<StoreOfStudentsService>(StoreOfStudentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
