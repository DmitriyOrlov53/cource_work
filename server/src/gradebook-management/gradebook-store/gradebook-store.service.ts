import { Injectable } from '@nestjs/common';
import { CollectionClientService } from 'src/database/collection-client.service';
import { AcademicDayDocument } from 'src/database/objects/academic-day.object';

@Injectable()
export class GradebookStoreService extends CollectionClientService<AcademicDayDocument & Document> {
	readonly collectionName = 'GradeBook';
	getGradesStatistic(subject?: string) {
	}
	getGradesBySubject() {
		this.collection.aggregate();
	}
}
