import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Equipos } from '../models';
import { EquiposRepository } from '../repositories';
export declare class EquiposcontrollerController {
    equiposRepository: EquiposRepository;
    constructor(equiposRepository: EquiposRepository);
    create(equipos: Omit<Equipos, 'id'>): Promise<Equipos>;
    count(where?: Where<Equipos>): Promise<Count>;
    find(filter?: Filter<Equipos>): Promise<Equipos[]>;
    updateAll(equipos: Equipos, where?: Where<Equipos>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Equipos>): Promise<Equipos>;
    updateById(id: string, equipos: Equipos): Promise<void>;
    replaceById(id: string, equipos: Equipos): Promise<void>;
    deleteById(id: string): Promise<void>;
}
