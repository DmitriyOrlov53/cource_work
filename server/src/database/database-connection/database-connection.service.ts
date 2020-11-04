import { Injectable } from '@nestjs/common';
import mongodb, { MongoClient } from 'mongodb';

@Injectable()
export class DatabaseConnectionService {
	readonly DBServerURL = 'mongodb://localhost:8000';
	private connectionCahce?: MongoClient;
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
			this.connectionCahce = await mongodb.connect(this.DBServerURL);
		} catch (e) {
			console.log(e);
		}
	}
}
