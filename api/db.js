const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "gestion2"
});

module.exports = { db };


/* import mysql from "mysql";
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "gestion2"
}) */