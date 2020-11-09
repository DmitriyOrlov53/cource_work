import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerAdressService {
  get(): string {
    const { protocol, hostname } = location;
    console.log(hostname);
    return protocol + '//' + hostname;
  }
  constructor() { }
}
