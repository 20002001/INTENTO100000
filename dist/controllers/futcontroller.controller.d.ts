import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Encuentros } from '../models';
import { EncuentrosRepository } from '../repositories';
export declare class FutcontrollerController {
    encuentrosRepository: EncuentrosRepository;
    constructor(encuentrosRepository: EncuentrosRepository);
    create(encuentros: Omit<Encuentros, 'id'>): Promise<Encuentros>;
    count(where?: Where<Encuentros>): Promise<Count>;
    find(filter?: Filter<Encuentros>): Promise<Encuentros[]>;
    updateAll(encuentros: Encuentros, where?: Where<Encuentros>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Encuentros>): Promise<Encuentros>;
    updateById(id: string, encuentros: Encuentros): Promise<void>;
    replaceById(id: string, encuentros: Encuentros): Promise<void>;
    deleteById(id: string): Promise<void>;
}
