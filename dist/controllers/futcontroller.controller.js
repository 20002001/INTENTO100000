"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutcontrollerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FutcontrollerController = class FutcontrollerController {
    constructor(encuentrosRepository) {
        this.encuentrosRepository = encuentrosRepository;
    }
    async create(encuentros) {
        return this.encuentrosRepository.create(encuentros);
    }
    async count(where) {
        return this.encuentrosRepository.count(where);
    }
    async find(filter) {
        return this.encuentrosRepository.find(filter);
    }
    async updateAll(encuentros, where) {
        return this.encuentrosRepository.updateAll(encuentros, where);
    }
    async findById(id, filter) {
        return this.encuentrosRepository.findById(id, filter);
    }
    async updateById(id, encuentros) {
        await this.encuentrosRepository.updateById(id, encuentros);
    }
    async replaceById(id, encuentros) {
        await this.encuentrosRepository.replaceById(id, encuentros);
    }
    async deleteById(id) {
        await this.encuentrosRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/encuentros'),
    (0, rest_1.response)(200, {
        description: 'Encuentros model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Encuentros) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encuentros, {
                    title: 'NewEncuentros',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FutcontrollerController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/encuentros/count'),
    (0, rest_1.response)(200, {
        description: 'Encuentros model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Encuentros)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FutcontrollerController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/encuentros'),
    (0, rest_1.response)(200, {
        description: 'Array of Encuentros model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Encuentros, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Encuentros)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FutcontrollerController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/encuentros'),
    (0, rest_1.response)(200, {
        description: 'Encuentros PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encuentros, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Encuentros)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Encuentros, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FutcontrollerController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/encuentros/{id}'),
    (0, rest_1.response)(200, {
        description: 'Encuentros model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encuentros, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Encuentros, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FutcontrollerController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/encuentros/{id}'),
    (0, rest_1.response)(204, {
        description: 'Encuentros PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encuentros, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Encuentros]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FutcontrollerController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/encuentros/{id}'),
    (0, rest_1.response)(204, {
        description: 'Encuentros PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Encuentros]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FutcontrollerController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/encuentros/{id}'),
    (0, rest_1.response)(204, {
        description: 'Encuentros DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FutcontrollerController.prototype, "deleteById", null);
FutcontrollerController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.EncuentrosRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.EncuentrosRepository])
], FutcontrollerController);
exports.FutcontrollerController = FutcontrollerController;
//# sourceMappingURL=futcontroller.controller.js.map