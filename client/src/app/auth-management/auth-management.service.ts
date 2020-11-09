import { Injectable } from '@angular/core';
import { AuthData } from '../../../../server/src/auth/request-with-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthManagementService {
  private authData: AuthData|null = null;
  getAuthData(): AuthData {
    if (this.authData) {
      return this.authData;
    } else {
      throw new Error('Auth data not found');
    }
  }
  setAuthData(authData: AuthData): void {
    this.authData = authData;
  }
  resetAuthData(): void {
    this.authData = null;
  }
  constructor() { }
}
