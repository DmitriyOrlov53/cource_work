import { Injectable } from '@nestjs/common';
import { Cursor } from 'mongodb';
import { CollectionClientService } from 'src/database/collection-client.service';
import { Teacher } from 'src/database/objects/teacher.object';
import { Clerk } from '../../database/objects/clerk.object';

@Injectable()
export class StoreOfClerksService extends CollectionClientService<Clerk> {
	readonly collectionName = 'Clerks';
	private readonly aggregationTeachers = [
		{
			$match: {
				position: 'teacher',
			},
		},
		{
			$lookup: {
				from: 'Subjects',
				localField: '_id',
				foreignField: 'teacherId',
				as: 'subjects',
			},
		},
	];
	async getAllTaechers(): Promise<Teacher[]> {
		const records = this.collection.aggregate<Teacher>(this.aggregationTeachers);
		return records.toArray();
	}
}
