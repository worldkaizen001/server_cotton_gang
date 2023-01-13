const config = require('../config');
require('dotenv').config();
const port = process.env.PORT || config.PGPORT;


const Pool = require("pg").Pool;


const pool = new Pool({
    user: config.PGUSERER,
    host: config.PGHOST,
    database: config.PGDATABASE,
    password: config.PGPASSWORD,
    port: port,
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0,

});

module.exports = pool;
