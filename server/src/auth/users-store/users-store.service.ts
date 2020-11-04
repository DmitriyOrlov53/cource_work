import { Injectable } from '@nestjs/common';
import { CollectionClientService } from 'src/database/collection-client.service';
import { AuthData } from '../request-with-auth';
import { User } from './user';

@Injectable()
export class UsersStoreService extends CollectionClientService<User> {
	readonly collectionName = 'Users';
	async getUserByAuthData(authData: AuthData) {
		const records = await this.getRecords();
		const user = records.find((user) => {
			const isLoginCorrespoinding = user.login === authData.login;
			const isPasswordCorrespoinding = user.password === authData.password;
			return isLoginCorrespoinding && isPasswordCorrespoinding;
		});
		if (user) {
			return user;
		} else {
			throw new Error('User not found');
		}
	}
}
