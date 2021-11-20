import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EveFutDataSource} from '../datasources';
import {Estadios, EstadiosRelations} from '../models';

export class EstadiosRepository extends DefaultCrudRepository<
  Estadios,
  typeof Estadios.prototype.id,
  EstadiosRelations
> {
  constructor(
    @inject('datasources.eve_fut') dataSource: EveFutDataSource,
  ) {
    super(Estadios, dataSource);
  }
}
