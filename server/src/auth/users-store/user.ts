import { ObjectId } from 'mongodb';
import { AuthData } from '../request-with-auth';

export interface User extends AuthData {
	clerkID: ObjectId;
}
