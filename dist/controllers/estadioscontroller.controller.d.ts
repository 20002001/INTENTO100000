import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Estadios } from '../models';
import { EstadiosRepository } from '../repositories';
export declare class EstadioscontrollerController {
    estadiosRepository: EstadiosRepository;
    constructor(estadiosRepository: EstadiosRepository);
    create(estadios: Omit<Estadios, 'id'>): Promise<Estadios>;
    count(where?: Where<Estadios>): Promise<Count>;
    find(filter?: Filter<Estadios>): Promise<Estadios[]>;
    updateAll(estadios: Estadios, where?: Where<Estadios>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Estadios>): Promise<Estadios>;
    updateById(id: string, estadios: Estadios): Promise<void>;
    replaceById(id: string, estadios: Estadios): Promise<void>;
    deleteById(id: string): Promise<void>;
}
