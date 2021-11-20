import { Entity } from '@loopback/repository';
export declare class Jugadores extends Entity {
    id?: string;
    nombre: string;
    edad: string;
    cod_equipo1: string;
    identidad: string;
    [prop: string]: any;
    constructor(data?: Partial<Jugadores>);
}
export interface JugadoresRelations {
}
export declare type JugadoresWithRelations = Jugadores & JugadoresRelations;
