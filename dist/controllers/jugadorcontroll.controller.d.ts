import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Jugadores } from '../models';
import { JugadoresRepository } from '../repositories';
export declare class JugadorcontrollController {
    jugadoresRepository: JugadoresRepository;
    constructor(jugadoresRepository: JugadoresRepository);
    create(jugadores: Omit<Jugadores, 'id'>): Promise<Jugadores>;
    count(where?: Where<Jugadores>): Promise<Count>;
    find(filter?: Filter<Jugadores>): Promise<Jugadores[]>;
    updateAll(jugadores: Jugadores, where?: Where<Jugadores>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Jugadores>): Promise<Jugadores>;
    updateById(id: string, jugadores: Jugadores): Promise<void>;
    replaceById(id: string, jugadores: Jugadores): Promise<void>;
    deleteById(id: string): Promise<void>;
}
