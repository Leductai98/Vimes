const Pool = require("pg").Pool;

const pool = new Pool({
    user:"afmqehnu",
    host:"rain.db.elephantsql.com",
    database:"afmqehnu",
    password:"p9jHpjLtL4koM1DGhnZ4Kz7903SeHEwf",
    port:5432,
})

module.exports= pool