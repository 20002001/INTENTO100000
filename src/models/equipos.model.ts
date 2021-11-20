import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Equipos extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Cod_equipo: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  localidad: string;

  @property({
    type: 'string',
    required: true,
  })
  posicion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Equipos>) {
    super(data);
  }
}

export interface EquiposRelations {
  // describe navigational properties here
}

export type EquiposWithRelations = Equipos & EquiposRelations;
