import createClient from 'openapi-fetch';
import type { paths } from './spec';

export const client = createClient<paths>({ baseUrl: 'https://ungh.cc/' });
export type { paths };
