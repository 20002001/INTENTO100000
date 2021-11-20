import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EveFutDataSource} from '../datasources';
import {Jugadores, JugadoresRelations} from '../models';

export class JugadoresRepository extends DefaultCrudRepository<
  Jugadores,
  typeof Jugadores.prototype.id,
  JugadoresRelations
> {
  constructor(
    @inject('datasources.eve_fut') dataSource: EveFutDataSource,
  ) {
    super(Jugadores, dataSource);
  }
}
