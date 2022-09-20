import { postgraphile, PostGraphileOptions } from 'postgraphile';

const options: PostGraphileOptions = {
  retryOnInitFail: true,
  subscriptions: true,
};

export const middleware = postgraphile(
  'paste_your_hardcoded_postgres_db_url',
  options,
);
