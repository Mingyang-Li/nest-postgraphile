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
  process.env.DATABASE_URL,
  process.env.KEDO_DB_PUBLIC_SCHEMA,
  options,
);
