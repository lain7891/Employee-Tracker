const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Lain7891!",
  database: "employee_trackerDB"
});

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
  });