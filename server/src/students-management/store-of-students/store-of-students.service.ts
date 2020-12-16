import { Injectable } from '@nestjs/common';
import { CollectionClientService } from 'src/database/collection-client.service';
import { Document } from 'src/database/objects/documnet.object';
import { Person } from 'src/database/objects/person.object';

@Injectable()
export class StoreOfStudentsService extends CollectionClientService<Person & Document> {
	readonly collectionName = 'Students';
}
