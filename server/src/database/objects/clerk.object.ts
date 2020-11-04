import { Person } from './person.object';

export interface Clerk extends Person {
	position: Positions;
}

type Positions = 'teacher' | 'developer';
