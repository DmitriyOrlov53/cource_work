import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AuthGuard } from './auth.guard';
import { UsersStoreService } from './users-store/users-store.service';

@Module({
	imports: [DatabaseModule],
	providers: [AuthGuard, UsersStoreService],
	exports: [AuthGuard],
})
export class AuthModule {}
