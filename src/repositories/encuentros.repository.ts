import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EveFutDataSource} from '../datasources';
import {Encuentros, EncuentrosRelations} from '../models';

export class EncuentrosRepository extends DefaultCrudRepository<
  Encuentros,
  typeof Encuentros.prototype.id,
  EncuentrosRelations
> {
  constructor(
    @inject('datasources.eve_fut') dataSource: EveFutDataSource,
  ) {
    super(Encuentros, dataSource);
  }
}
