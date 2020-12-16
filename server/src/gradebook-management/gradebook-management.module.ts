import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { GradebookStoreService } from './gradebook-store/gradebook-store.service';

@Module({
	providers: [GradebookStoreService],
	imports: [DatabaseModule],
	exports: [GradebookStoreService],
})
export class GradebookManagementModule {}
