const { Pool } = require ('pg')

const db = new Pool ({
    connectionString: process.env.DB_URI
});

export default

module.exports = db;