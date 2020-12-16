import { ObjectId } from 'mongodb';
import { Person } from './person.object';
import { Subject } from './subject.object';

export interface AcademicDayDocument {
	date: Date;
	classes: ClassDocument[];
}

export interface AcademicDay {
	date: Date;
	classes: Class[];
}

export interface ClassDocument {
	subject: ObjectId;
	absentStudents: ObjectId[];
	grades: GradeDocument[];
}
export interface Class {
	subject: Subject;
	absentStudents: Person[];
	grades: Grade[];
}

export interface GradeDocument {
	student: ObjectId;
	value: 2 | 3 | 4 | 5;
}

export interface Grade {
	student: Person;
	value: 2 | 3 | 4 | 5;
}
