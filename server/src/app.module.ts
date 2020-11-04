import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ClerkManagementModule } from './clerk-management/clerk-management.module';

@Module({
	imports: [DatabaseModule, ClerkManagementModule],
})
export class AppModule {}
