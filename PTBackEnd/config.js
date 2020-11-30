import mysql from 'mysql';
import { config } from 'process';

// Local mysql server information to connect
const pool = mysql.createPool({
    connectionLimit: 10,
    // Local mysql server port is 3306
    port: '3306',
    host: 'localhost',
    database: 'primetourz',
    user: 'root',
    password: ''

});

export default pool;