import { Controller, Get, Param } from '@nestjs/common';
import { GradebookStoreService } from 'src/gradebook-management/gradebook-store/gradebook-store.service';

@Controller('statistic')
export class StatisticController {
	constructor(private gradeBookStore: GradebookStoreService) {}
	@Get('grades/:subject')
	async getGrades(@Param() subject?: string): Promise<void> {
	}
}
