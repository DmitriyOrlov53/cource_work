import { Injectable } from '@nestjs/common';
import { DatabaseClientService } from './database-client/database-client.service';

@Injectable()
export abstract class CollectionClientService<T extends { [index: string]: any }> {
	abstract readonly collectionName: string;
	protected get collection() {
		return this.database.getDatabase().collection<T>(this.collectionName);
	}
	constructor(private database: DatabaseClientService) {}
	async getRecords() {
		const recordCursors = this.collection.find();
		return await recordCursors.toArray();
	}
}
