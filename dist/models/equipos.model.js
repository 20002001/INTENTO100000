"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipos = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Equipos = class Equipos extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Equipos.prototype, "Cod_equipo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Equipos.prototype, "localidad", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Equipos.prototype, "posicion", void 0);
Equipos = (0, tslib_1.__decorate)([
    (0, repository_1.model)({ settings: { strict: false } }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Equipos);
exports.Equipos = Equipos;
//# sourceMappingURL=equipos.model.js.map