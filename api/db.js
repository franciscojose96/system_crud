import mysql from "mysql"

export const db = mysql.createConnection ({
    host: "localhost",
    user: "root", 
    password: "123@Mudar",
    database: "crud"
});

