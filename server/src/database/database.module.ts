import { Module } from '@nestjs/common';
import { DatabaseConnectionService } from './database-connection/database-connection.service';
import { DatabaseClientService } from './database-client/database-client.service';

@Module({
	providers: [DatabaseConnectionService, DatabaseClientService],
	exports: [DatabaseConnectionService, DatabaseClientService],
})
export class DatabaseModule {}
