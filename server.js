const mysql = require("mysql");
const inquirer = require("inquirer");
const { allowedNodeEnvironmentFlags, exit } = require("process");

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
              "View All Departments",
              "Exit",
          ]

      }).then(response => {
          console.log(response)
          switch(response.userChoice){
              case "View all Employees":
                  allEmployees();
                  break;
              case "View all employees by Department":
                  employeesByDepartment();
                  break;
              case "View all employees by Manager":
                  employeesByManager();
                  break;
              case "Add Employee":
                  addEmployee();
                  break;
              case "Add Role":
                  addRole();
                  break;
              case "Add Department":
                  addDepartment();
                  break;
              case "View all roles":
                  allRoles();
                  break;
              case "View all departments":
                  allDepartments();
                  break;
              case "Exit":
                  exit();
          }
      })
  }

promptUser();

function allEmployees(){
connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, name AS Department FROM employee LEFT JOIN role ON employee.role_id = role_id LEFT JOIN department ON role.department_id = department_id;", 
(err, res) => {
    if(err) throw err;
    console.table(res);
    promptUser();
});}

function employeesByDepartment(){
    connection.query("", 
    (err, res) => {
        if(err) throw err;
        console.table(res);
        promptUser();
    });}

