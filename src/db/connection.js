import mysql from 'mysql2';

const pool = mysql.createPool({
    host: "localhost",
    user: "jads",
    password: "jadinha",
    database: "tudolist"
});

const connection = pool.promise();

export default connection;
