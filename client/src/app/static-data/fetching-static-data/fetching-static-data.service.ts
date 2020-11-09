import { Injectable } from '@angular/core';
import { ServerAdressService } from 'src/app/services/server-address/server-adress.service';
import { Person } from '../../../../../server/src/database/objects/person.object';
import { Teacher } from '../../../../../server/src/database/objects/teacher.object';

@Injectable()
export class FetchingStaticDataService {
  teachers: Teacher[] = [];
  students: Person[] = [];
  async getAllTeachers(): Promise<void> {
    this.teachers = await this.fetchData<Teacher[]>('/clerks/teachers');
    console.log(this.teachers);
  }
  async fetchData<T>(path: string): Promise<T> {
    const url = this.serverAddress.get() + path;
    console.log(url);
    const response = await fetch(url, { method: 'POST', body: '{}' });
    return response.json();
  }
  async getAllData(): Promise<void> {
    await this.getAllTeachers();
  }
  constructor(private serverAddress: ServerAdressService) { }
}
