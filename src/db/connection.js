import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: "localhost",
    user: process.env.USER_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    database: "tudolist"
});

const connection = pool.promise();

export default connection;
