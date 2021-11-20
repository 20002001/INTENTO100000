import { DefaultCrudRepository } from '@loopback/repository';
import { EveFutDataSource } from '../datasources';
import { Equipos, EquiposRelations } from '../models';
export declare class EquiposRepository extends DefaultCrudRepository<Equipos, typeof Equipos.prototype.localidad, EquiposRelations> {
    constructor(dataSource: EveFutDataSource);
}
