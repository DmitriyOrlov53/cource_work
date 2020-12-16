import { Test, TestingModule } from '@nestjs/testing';
import { GradebookStoreService } from './gradebook-store.service';

describe('GradebookStoreService', () => {
	let service: GradebookStoreService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [GradebookStoreService],
		}).compile();

		service = module.get<GradebookStoreService>(GradebookStoreService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
