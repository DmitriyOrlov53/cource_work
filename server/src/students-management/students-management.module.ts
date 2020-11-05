import { Module } from '@nestjs/common';
import { StudentsController } from './students/students.controller';
import { StoreOfStudentsService } from './store-of-students/store-of-students.service';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	controllers: [StudentsController],
	providers: [StoreOfStudentsService],
	imports: [DatabaseModule, AuthModule],
})
export class StudentsManagementModule {}
