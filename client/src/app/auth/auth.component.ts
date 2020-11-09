import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthenticationService } from './auth.service';
import { AuthData } from '../../../../server/src/auth/request-with-auth';
import { AuthManagementService } from '../auth-management/auth-management.service';

type AuthFormData = { [K in keyof AuthData]: AuthData[K]|null };

@Component({
  selector: 'app-authentication',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
})
export class AuthComponent implements OnInit {
  isAuthDataInvalid = false;
  isPasswordHidden = true;
  isDataSended = false;
  userInput = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  get authDataControls(): { login: AbstractControl|null; password: AbstractControl|null } {
    return {
      login: this.userInput.get('login'),
      password: this.userInput.get('password'),
    };
  }
    get authData(): AuthFormData {
      return {
        login: this.authDataControls.login?.value,
        password: this.authDataControls.password?.value,
      };
  }
  get validatedAuthData(): AuthData {
    for (const key in this.authData) {
      if (typeof this.authData[key as keyof AuthFormData] !== 'string') {
        throw new Error(`Key ${key} is null`);
      }
    }
    return this.authData as AuthData;
  }
  constructor(
    private authenticationService: AuthenticationService,
    private aurthManagement: AuthManagementService
  ) {}
  toggleHidePassword(): void {
    this.isPasswordHidden = !this.isPasswordHidden;
  }
  async submit(): Promise<void> {
    try {
      this.isDataSended = true;
      this.isAuthDataInvalid = false;
      await this.authenticationService.singIn(this.validatedAuthData);
    }
    catch {
      this.isAuthDataInvalid = true;
      this.isDataSended = false;
    }
  }

  ngOnInit(): void {
    this.aurthManagement.resetAuthData();
  }

}
