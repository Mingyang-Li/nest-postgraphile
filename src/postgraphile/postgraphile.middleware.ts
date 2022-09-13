import { postgraphile, PostGraphileOptions } from 'postgraphile';

const options: PostGraphileOptions = {
  ownerConnectionString: process.env.DATABASE_URL,
  simpleCollections: 'both',
  pgDefaultRole: 'app_user',
  subscriptions: true,
  dynamicJson: true,
  watchPg: true,
  ignoreRBAC: false,
  extendedErrors: [
    'severity',
    'code',
    'detail',
    'hint',
    'position',
    'internalPosition',
    'internalQuery',
    'where',
    'schema',
    'table',
    'column',
    'dataType',
    'constraint',
    'file',
    'line',
    'routine',
  ],
  showErrorStack: 'json',
  enhanceGraphiql: true,
  graphiql: true,
  allowExplain() {
    // TODO: customise condition!
    return true;
  },
  legacyRelations: 'omit',
  enableQueryBatching: true,
  enableCors: true,
  appendPlugins: [require('@graphile-contrib/pg-simplify-inflector')],
};

export const middleware = postgraphile(
  `postgres://${process.env.KEDO_API_USER_NAME}:${process.env.KEDO_API_USER_PASSWORD}@${process.env.KEDO_DB_HOST}:${process.env.KEDO_DB_PORT_EXPOSE}/${process.env.KEDO_DB_NAME}`,
  process.env.KEDO_DB_PUBLIC_SCHEMA,
  options,
);
