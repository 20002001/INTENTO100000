import { DefaultCrudRepository } from '@loopback/repository';
import { EveFutDataSource } from '../datasources';
import { Estadios, EstadiosRelations } from '../models';
export declare class EstadiosRepository extends DefaultCrudRepository<Estadios, typeof Estadios.prototype.id, EstadiosRelations> {
    constructor(dataSource: EveFutDataSource);
}
