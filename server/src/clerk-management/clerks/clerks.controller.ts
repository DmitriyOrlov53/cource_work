import { Controller, Post } from '@nestjs/common';
import { StoreOfClerksService } from '../store-of-clerks/store-of-clerks.service';

@Controller('clerks')
export class ClerksController {
	constructor(private clerksStore: StoreOfClerksService) {}
	@Post('all')
	getAllClerks() {
		this.clerksStore.getRecords();
	}
	@Post('teachers')
	async getAllTeachers() {
		return await this.clerksStore.getAllTaechers();
	}
}
