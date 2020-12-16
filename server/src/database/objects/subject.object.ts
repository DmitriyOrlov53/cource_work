import { ObjectId } from 'mongodb';

export interface Subject {
	name: string;
	teacher_id: ObjectId[];
}
