import { Injectable } from '@nestjs/common';
import { CollectionClientService } from 'src/database/collection-client.service';
import { Clerk } from '../../database/objects/clerk.object';

@Injectable()
export class StoreOfClerksService extends CollectionClientService<Clerk> {
	readonly collectionName = 'Clerks';
	async getAllTaechers() {
		const records = this.collection.find({ position: 'teacher' });
		return await records.toArray();
	}
}
