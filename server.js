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
    // runSearch();
  });

  function promptUser(){
      inquirer.prompt({
          type: "list",
          message: "What would you like to do?",
          name: "userChoices",
          choices: [
              "View all Employees",
              "View all Employees by Department",
              "View all Employees by Manager",
              "Add Employee",
              "Add Role",
              "Add Department",
              "View All Roles",
              "View All Deparments",
              "Exit",
          ]

      }).then(response => {
          console.log(response)
      })
  }
  promptUser();