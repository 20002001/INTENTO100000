import { Entity } from '@loopback/repository';
export declare class Equipos extends Entity {
    Cod_equipo: string;
    localidad: string;
    posicion: string;
    [prop: string]: any;
    constructor(data?: Partial<Equipos>);
}
export interface EquiposRelations {
}
export declare type EquiposWithRelations = Equipos & EquiposRelations;
