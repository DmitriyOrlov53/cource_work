import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthData, RequestWithAuth } from './request-with-auth';
import { UsersStoreService } from './users-store/users-store.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private usersStore: UsersStoreService) {}
	async validateUser(authData: AuthData) {
		try {
			const user = await this.usersStore.getUserByAuthData(authData);
			return Boolean(user);
		} catch {
			return false;
		}
	}
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest<RequestWithAuth>();
		return await this.validateUser(request.authData);
	}
}
