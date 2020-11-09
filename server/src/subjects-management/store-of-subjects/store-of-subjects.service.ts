import { Injectable } from '@nestjs/common';
import { CollectionClientService } from 'src/database/collection-client.service';
import { Document } from 'src/database/objects/documnet.object';
import { Subject } from '../../database/objects/subject.object';

@Injectable()
export class StoreOfSubjectsService extends CollectionClientService<Subject & Document> {
	collectionName = 'Subjects';
}
