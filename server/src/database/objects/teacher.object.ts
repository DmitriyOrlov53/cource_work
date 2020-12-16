import { Clerk } from './clerk.object';
import { Subject } from './subject.object';

export interface Teacher extends Clerk {
	subjects: Subject[];
	position: 'teacher';
}
