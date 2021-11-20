"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadioscontrollerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EstadioscontrollerController = class EstadioscontrollerController {
    constructor(estadiosRepository) {
        this.estadiosRepository = estadiosRepository;
    }
    async create(estadios) {
        return this.estadiosRepository.create(estadios);
    }
    async count(where) {
        return this.estadiosRepository.count(where);
    }
    async find(filter) {
        return this.estadiosRepository.find(filter);
    }
    async updateAll(estadios, where) {
        return this.estadiosRepository.updateAll(estadios, where);
    }
    async findById(id, filter) {
        return this.estadiosRepository.findById(id, filter);
    }
    async updateById(id, estadios) {
        await this.estadiosRepository.updateById(id, estadios);
    }
    async replaceById(id, estadios) {
        await this.estadiosRepository.replaceById(id, estadios);
    }
    async deleteById(id) {
        await this.estadiosRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/estadios'),
    (0, rest_1.response)(200, {
        description: 'Estadios model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Estadios) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estadios, {
                    title: 'NewEstadios',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstadioscontrollerController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/estadios/count'),
    (0, rest_1.response)(200, {
        description: 'Estadios model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Estadios)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstadioscontrollerController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/estadios'),
    (0, rest_1.response)(200, {
        description: 'Array of Estadios model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Estadios, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Estadios)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstadioscontrollerController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/estadios'),
    (0, rest_1.response)(200, {
        description: 'Estadios PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estadios, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Estadios)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Estadios, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstadioscontrollerController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/estadios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Estadios model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estadios, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Estadios, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstadioscontrollerController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/estadios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Estadios PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estadios, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Estadios]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstadioscontrollerController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/estadios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Estadios PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Estadios]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstadioscontrollerController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/estadios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Estadios DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstadioscontrollerController.prototype, "deleteById", null);
EstadioscontrollerController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.EstadiosRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.EstadiosRepository])
], EstadioscontrollerController);
exports.EstadioscontrollerController = EstadioscontrollerController;
//# sourceMappingURL=estadioscontroller.controller.js.map