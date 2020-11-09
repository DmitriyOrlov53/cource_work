import { Person } from './person.object';
import { Subject } from './subject.object';

export interface Teacher extends Person {
	subjects: Subject[];
}
