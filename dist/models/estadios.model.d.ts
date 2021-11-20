import { Entity } from '@loopback/repository';
export declare class Estadios extends Entity {
    id?: string;
    lugar: string;
    nombre: string;
    [prop: string]: any;
    constructor(data?: Partial<Estadios>);
}
export interface EstadiosRelations {
}
export declare type EstadiosWithRelations = Estadios & EstadiosRelations;
