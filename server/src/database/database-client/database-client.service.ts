import { Injectable } from '@nestjs/common';
import { DatabaseConnectionService } from '../database-connection/database-connection.service';

@Injectable()
export class DatabaseClientService {
	readonly databaseName = 'LearnGroup';
	constructor(private connectionService: DatabaseConnectionService) {}
	getDatabase() {
		return this.connectionService.connection.db(this.databaseName);
	}
}
