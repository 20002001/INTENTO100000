import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EveFutDataSource} from '../datasources';
import {Equipos, EquiposRelations} from '../models';

export class EquiposRepository extends DefaultCrudRepository<
  Equipos,
  typeof Equipos.prototype.localidad,
  EquiposRelations
> {
  constructor(
    @inject('datasources.eve_fut') dataSource: EveFutDataSource,
  ) {
    super(Equipos, dataSource);
  }
}
