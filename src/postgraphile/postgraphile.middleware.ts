import { postgraphile, PostGraphileOptions } from 'postgraphile';

const options: PostGraphileOptions = {};

export const middleware = postgraphile(process.env.DATABASE_URL ?? '', options);
