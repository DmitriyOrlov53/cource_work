import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { StoreOfClerksService } from './store-of-clerks/store-of-clerks.service';
import { ClerksController } from './clerks/clerks.controller';

@Module({
	imports: [DatabaseModule],
	providers: [StoreOfClerksService],
	exports: [StoreOfClerksService],
	controllers: [ClerksController],
})
export class ClerkManagementModule {}
