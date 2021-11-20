import { DefaultCrudRepository } from '@loopback/repository';
import { EveFutDataSource } from '../datasources';
import { Encuentros, EncuentrosRelations } from '../models';
export declare class EncuentrosRepository extends DefaultCrudRepository<Encuentros, typeof Encuentros.prototype.id, EncuentrosRelations> {
    constructor(dataSource: EveFutDataSource);
}
