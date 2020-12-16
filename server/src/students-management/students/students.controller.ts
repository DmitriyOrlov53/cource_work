import { Controller, Post } from '@nestjs/common';
import { StoreOfStudentsService } from '../store-of-students/store-of-students.service';

@Controller('students')
export class StudentsController {
	constructor(private students: StoreOfStudentsService) {}
	@Post('all')
	getAllStudents() {
		return this.students.getRecords();
	}
}
