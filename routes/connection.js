const mysql = require("mysql");

const db = mysql.createConnection(
    {
	host: "localhost",
	port: 3301,
	user: "root",
	password: "rootroot",
	database: "company_db",
    },

console.log("You are now connected to the database")

)


module.exports = db;