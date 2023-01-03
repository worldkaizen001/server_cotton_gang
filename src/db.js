const config = require('../config')

const Pool = require("pg").Pool;


const pool = new Pool({
    user: config.PGUSERER,
    host: config.PGHOST,
    database: config.PGDATABASE,
    password: config.PGPASSWORD,
    port: config.PGPORT

});

module.exports = pool;
