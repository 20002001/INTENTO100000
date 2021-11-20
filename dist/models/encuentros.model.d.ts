import { Entity } from '@loopback/repository';
export declare class Encuentros extends Entity {
    id?: string;
    lugar: string;
    fechas: string;
    rivales: string;
    [prop: string]: any;
    constructor(data?: Partial<Encuentros>);
}
export interface EncuentrosRelations {
}
export declare type EncuentrosWithRelations = Encuentros & EncuentrosRelations;
