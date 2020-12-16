import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ClerkManagementModule } from './clerk-management/clerk-management.module';
import { StudentsManagementModule } from './students-management/students-management.module';
import { SubjectsManagementModule } from './subjects-management/subjects-management.module';
import { GradebookManagementModule } from './gradebook-management/gradebook-management.module';
import { StatisticModule } from './statistic/statistic.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
	imports: [
		DatabaseModule,
		ClerkManagementModule,
		StudentsManagementModule,
		SubjectsManagementModule,
		GradebookManagementModule,
		StatisticModule,
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '../../../client/dist/client'),
		}),
	],
})
export class AppModule {}
