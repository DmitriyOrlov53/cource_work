import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ClerkManagementModule } from './clerk-management/clerk-management.module';
import { StudentsManagementModule } from './students-management/students-management.module';
import { SubjectsManagementModule } from './subjects-management/subjects-management.module';
import { GradebookManagementModule } from './gradebook-management/gradebook-management.module';
import { StatisticModule } from './statistic/statistic.module';

@Module({
	imports: [DatabaseModule, ClerkManagementModule, StudentsManagementModule, SubjectsManagementModule, GradebookManagementModule, StatisticModule],
})
export class AppModule {}
