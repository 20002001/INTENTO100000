"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JugadorcontrollController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let JugadorcontrollController = class JugadorcontrollController {
    constructor(jugadoresRepository) {
        this.jugadoresRepository = jugadoresRepository;
    }
    async create(jugadores) {
        return this.jugadoresRepository.create(jugadores);
    }
    async count(where) {
        return this.jugadoresRepository.count(where);
    }
    async find(filter) {
        return this.jugadoresRepository.find(filter);
    }
    async updateAll(jugadores, where) {
        return this.jugadoresRepository.updateAll(jugadores, where);
    }
    async findById(id, filter) {
        return this.jugadoresRepository.findById(id, filter);
    }
    async updateById(id, jugadores) {
        await this.jugadoresRepository.updateById(id, jugadores);
    }
    async replaceById(id, jugadores) {
        await this.jugadoresRepository.replaceById(id, jugadores);
    }
    async deleteById(id) {
        await this.jugadoresRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/jugadores'),
    (0, rest_1.response)(200, {
        description: 'Jugadores model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Jugadores) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Jugadores, {
                    title: 'NewJugadores',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], JugadorcontrollController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/jugadores/count'),
    (0, rest_1.response)(200, {
        description: 'Jugadores model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Jugadores)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], JugadorcontrollController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/jugadores'),
    (0, rest_1.response)(200, {
        description: 'Array of Jugadores model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Jugadores, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Jugadores)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], JugadorcontrollController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/jugadores'),
    (0, rest_1.response)(200, {
        description: 'Jugadores PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Jugadores, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Jugadores)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Jugadores, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], JugadorcontrollController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/jugadores/{id}'),
    (0, rest_1.response)(200, {
        description: 'Jugadores model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Jugadores, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Jugadores, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], JugadorcontrollController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/jugadores/{id}'),
    (0, rest_1.response)(204, {
        description: 'Jugadores PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Jugadores, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Jugadores]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], JugadorcontrollController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/jugadores/{id}'),
    (0, rest_1.response)(204, {
        description: 'Jugadores PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Jugadores]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], JugadorcontrollController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/jugadores/{id}'),
    (0, rest_1.response)(204, {
        description: 'Jugadores DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], JugadorcontrollController.prototype, "deleteById", null);
JugadorcontrollController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.JugadoresRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.JugadoresRepository])
], JugadorcontrollController);
exports.JugadorcontrollController = JugadorcontrollController;
//# sourceMappingURL=jugadorcontroll.controller.js.map