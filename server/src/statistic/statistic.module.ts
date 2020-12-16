import { Module } from '@nestjs/common';
import { GradebookManagementModule } from 'src/gradebook-management/gradebook-management.module';
import { StatisticController } from './statistic/statistic.controller';

@Module({
	controllers: [StatisticController],
	imports: [GradebookManagementModule],
})
export class StatisticModule {}
