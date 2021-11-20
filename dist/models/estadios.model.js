"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estadios = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Estadios = class Estadios extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Estadios.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Estadios.prototype, "lugar", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Estadios.prototype, "nombre", void 0);
Estadios = (0, tslib_1.__decorate)([
    (0, repository_1.model)({ settings: { strict: false } }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Estadios);
exports.Estadios = Estadios;
//# sourceMappingURL=estadios.model.js.map