import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

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
@lifeCycleObserver('datasource')
export class EveFutDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'eve_fut';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.eve_fut', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
