import {Pool} from 'pg';
import config from './config';

let host;
if (process.env.NODE_ENV === 'production') {
    host = 'localhost';
} else {
    host = 'localhost';
    // host = '35.226.9.68';
}

const pgPool = new Pool({
    user: config.dbUser,
    host: host,
    database: config.dbName,
    password: config.dbPassword,
    port: config.dbPort,
    max: 5
});

export default pgPool;
