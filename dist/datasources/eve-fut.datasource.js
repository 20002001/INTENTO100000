"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EveFutDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'eve_fut',
    connector: 'mongodb',
    url: 'mongodb+srv://victoria:admin@cluster0.jwogr.mongodb.net/fut',
    host: '@cluster0.jwogr.mongodb.net',
    port: 27017,
    user: 'victoria',
    password: '',
    database: 'fut',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let EveFutDataSource = class EveFutDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
EveFutDataSource.dataSourceName = 'eve_fut';
EveFutDataSource.defaultConfig = config;
EveFutDataSource = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource'),
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.config.eve_fut', { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], EveFutDataSource);
exports.EveFutDataSource = EveFutDataSource;
//# sourceMappingURL=eve-fut.datasource.js.map