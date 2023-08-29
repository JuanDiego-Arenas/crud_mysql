import { createPool } from 'mysql2/promise';
import * as env from './config.js'

export const pool = createPool({
	host: env.DB_HOST,
	user: env.DB_USER,
	port: env.DB_PORT,
	password: env.DB_PASSWORD,
	database: env.DB_DATABASE,
});
