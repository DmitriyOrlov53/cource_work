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
  }
  async getAllStudents(): Promise<void> {
    this.students = await this.fetchData<Person[]>('/students/all');
  }
  async fetchData<T>(path: string): Promise<T> {
    const url = this.serverAddress.get() + path;
    const response = await fetch(url, { method: 'POST', body: '{}' });
    const json = await response.json();
    console.log(json);
    return json;
  }
  getAllData(): void {
    this.getAllTeachers();
    this.getAllStudents();
  }
  constructor(private serverAddress: ServerAdressService) { }
}
