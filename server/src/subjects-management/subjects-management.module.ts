import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { StoreOfSubjectsService } from './store-of-subjects/store-of-subjects.service';

@Module({
	imports: [DatabaseModule],
	providers: [StoreOfSubjectsService],
	exports: [StoreOfSubjectsService]
})
export class SubjectsManagementModule {}
