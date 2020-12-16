import { Injectable } from '@nestjs/common';
import * as mongodb from 'mongodb';

@Injectable()
export class DatabaseConnectionService {
	connectionOptions: mongodb.MongoClientOptions = {
		useUnifiedTopology: true,
	};
	readonly DBServerURL = 'mongodb://localhost:27017';
	private connectionCahce?: mongodb.MongoClient;
	constructor() {
		this.connect();
	}
	get connection() {
		if (this.connectionCahce !== undefined) {
			return this.connectionCahce;
		} else {
			throw new Error('Not database connection');
		}
	}
	async connect() {
		try {
			type ConnectionArgs = [string, mongodb.MongoClientOptions];
			const connectionArgs: ConnectionArgs = [this.DBServerURL, this.connectionOptions];
			this.connectionCahce = await mongodb.connect(...connectionArgs);
		} catch (e) {
			console.log(e);
		}
	}
}
