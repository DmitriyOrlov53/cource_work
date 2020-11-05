import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { StoreOfStudentsService } from '../store-of-students/store-of-students.service';

@Controller('students')
export class StudentsController {
	constructor(private students: StoreOfStudentsService) {}
	@Post('all')
	@UseGuards(AuthGuard)
	getAllStudents() {
		return this.students.getRecords();
	}
}
