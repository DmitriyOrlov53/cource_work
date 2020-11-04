import { Test, TestingModule } from '@nestjs/testing';
import { ClerksController } from './clerks.controller';

describe('ClerksController', () => {
  let controller: ClerksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClerksController],
    }).compile();

    controller = module.get<ClerksController>(ClerksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
