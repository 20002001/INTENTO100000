"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadiosRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let EstadiosRepository = class EstadiosRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Estadios, dataSource);
    }
};
EstadiosRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.eve_fut')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.EveFutDataSource])
], EstadiosRepository);
exports.EstadiosRepository = EstadiosRepository;
//# sourceMappingURL=estadios.repository.js.map