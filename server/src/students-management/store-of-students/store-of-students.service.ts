import { Injectable } from '@nestjs/common';
import { CollectionClientService } from 'src/database/collection-client.service';
import { Person } from 'src/database/objects/person.object';

@Injectable()
export class StoreOfStudentsService extends CollectionClientService<Person> {
	readonly collectionName = 'students';
}
