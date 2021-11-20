import { DefaultCrudRepository } from '@loopback/repository';
import { EveFutDataSource } from '../datasources';
import { Jugadores, JugadoresRelations } from '../models';
export declare class JugadoresRepository extends DefaultCrudRepository<Jugadores, typeof Jugadores.prototype.id, JugadoresRelations> {
    constructor(dataSource: EveFutDataSource);
}
