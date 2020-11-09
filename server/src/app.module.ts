import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ClerkManagementModule } from './clerk-management/clerk-management.module';
import { StudentsManagementModule } from './students-management/students-management.module';
import { SubjectsManagementModule } from './subjects-management/subjects-management.module';

@Module({
	imports: [DatabaseModule, ClerkManagementModule, StudentsManagementModule, SubjectsManagementModule],
})
export class AppModule {}
