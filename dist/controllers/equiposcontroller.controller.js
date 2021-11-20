"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquiposcontrollerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EquiposcontrollerController = class EquiposcontrollerController {
    constructor(equiposRepository) {
        this.equiposRepository = equiposRepository;
    }
    async create(equipos) {
        return this.equiposRepository.create(equipos);
    }
    async count(where) {
        return this.equiposRepository.count(where);
    }
    async find(filter) {
        return this.equiposRepository.find(filter);
    }
    async updateAll(equipos, where) {
        return this.equiposRepository.updateAll(equipos, where);
    }
    async findById(id, filter) {
        return this.equiposRepository.findById(id, filter);
    }
    async updateById(id, equipos) {
        await this.equiposRepository.updateById(id, equipos);
    }
    async replaceById(id, equipos) {
        await this.equiposRepository.replaceById(id, equipos);
    }
    async deleteById(id) {
        await this.equiposRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/equipos'),
    (0, rest_1.response)(200, {
        description: 'Equipos model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Equipos) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Equipos, {
                    title: 'NewEquipos',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EquiposcontrollerController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/equipos/count'),
    (0, rest_1.response)(200, {
        description: 'Equipos model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Equipos)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EquiposcontrollerController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/equipos'),
    (0, rest_1.response)(200, {
        description: 'Array of Equipos model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Equipos, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Equipos)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EquiposcontrollerController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/equipos'),
    (0, rest_1.response)(200, {
        description: 'Equipos PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Equipos, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Equipos)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Equipos, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EquiposcontrollerController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/equipos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Equipos model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Equipos, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Equipos, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EquiposcontrollerController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/equipos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Equipos PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Equipos, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Equipos]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EquiposcontrollerController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/equipos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Equipos PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Equipos]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EquiposcontrollerController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/equipos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Equipos DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EquiposcontrollerController.prototype, "deleteById", null);
EquiposcontrollerController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.EquiposRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.EquiposRepository])
], EquiposcontrollerController);
exports.EquiposcontrollerController = EquiposcontrollerController;
//# sourceMappingURL=equiposcontroller.controller.js.map