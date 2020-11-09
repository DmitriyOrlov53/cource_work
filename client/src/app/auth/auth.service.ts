import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from '../../../../server/src/auth/request-with-auth';
import { AuthManagementService } from '../auth-management/auth-management.service';
import { ServerAdressService } from '../services/server-address/server-adress.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private userManager: AuthManagementService,
    private router: Router,
    private serverAddress: ServerAdressService
  ) { }
  async singIn(authData: AuthData): Promise<void> {
    await this.tryLogIn(authData);
    this.userManager.setAuthData(authData);
    this.router.navigate([`/`]);
  }
  private async tryLogIn(authData: AuthData): Promise<boolean> {
    const requestParams = this.genRquestParams(authData);
    const response = await fetch(...requestParams);
    return await response.json();
  }
  private genRquestParams(authData: AuthData): [string, RequestInit] {
    return [
      this.serverAddress.get() + 'auth',
      {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(authData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ];
  }
}
