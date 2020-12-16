import { Module } from '@nestjs/common';
import { StudentsController } from './students/students.controller';
import { StoreOfStudentsService } from './store-of-students/store-of-students.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
	controllers: [StudentsController],
	providers: [StoreOfStudentsService],
	imports: [DatabaseModule],
})
export class StudentsManagementModule {}
