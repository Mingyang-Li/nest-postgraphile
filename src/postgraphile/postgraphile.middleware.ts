import { postgraphile, PostGraphileOptions } from 'postgraphile';
import * as dotenv from 'dotenv';
dotenv.config();

const options: PostGraphileOptions = {
  subscriptions: true,
  retryOnInitFail: true,
  graphiql: true,
};

export const middleware = postgraphile(process.env.DATABASE_URL, options);
