import { Controller, Post, UseGuards } from '@nestjs/common';
import { StoreOfClerksService } from '../store-of-clerks/store-of-clerks.service';
import { AuthGuard } from '../../auth/auth.guard';

@Controller('clerks')
export class ClerksController {
	constructor(private clerksStore: StoreOfClerksService) {}
	@Post('all')
	@UseGuards(AuthGuard)
	getAllClerks() {
		this.clerksStore.getRecords();
	}
	@Post('teachers')
	@UseGuards(AuthGuard)
	getAllTeachers() {
		return this.getAllTeachers();
	}
}
