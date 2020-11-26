const mysql = require("mysql");
const inquirer = require("inquirer");
const { exit } = require("process");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Lain7891!",
  database: "employee_trackerDB",
});

connection.connect(function (err) {
  if (err) throw err;
  // runSearch();
});

var figlet = require("figlet");

figlet("Employee Tracker!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

function promptUser() {
  inquirer
    .prompt({
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
      ],
    })
    .then((response) => {
      console.log(response);
      switch (response.userChoices) {
        case "View all Employees":
          allEmployees();
          break;
        case "View all Employees by Department":
          employeesByDepartment();
          break;
        case "View all Employees by Manager":
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
        case "View All Roles":
          allRoles();
          break;
        case "View All Departments":
          allDepartments();
          break;
        case "Exit":
          exit();
      }
    });
}

promptUser();

function allEmployees() {
  let query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department FROM employee  LEFT JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}

function employeesByDepartment(departmentId) {
  connection.query("SELECT * FROM department;", (err, res) => {
    if (err) throw err;
    console.log(res);
    const choices = res.map((row) => ({
      value: row.id,
      name: row.name,
    }));
    inquirer
      .prompt({
        type: "list",
        message: "Which department do you want to look at?",
        name: "department",
        choices: choices,
      })
      .then(function (answer) {
        console.log(answer);
        let query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary 
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    INNER JOIN department ON role.department_id = department.id
    WHERE department.id = ${answer.department}`;
        connection.query(query, (err, res) => {
          if (err) throw err;
          console.table(res);
          promptUser();
        });
      });
  });
}

function employeesByManager() {
  let query = `SELECT employee.manager_id AS 'Manager ID', manager.first_name, manager.last_name AS 'Manager Name',
    employee.id AS 'Employee ID', employee.first_name, employee.last_name 'Employee'
    FROM employee employee
    INNER JOIN employee manager ON employee.manager_id = manager.id
    WHERE employee.manager_id IS NOT NULL
    ORDER BY 'Manager Name';`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "first_name",
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "last_name",
      },
      {
        type: "input",
        message: "What is the employee's id number",
        name: "role_id",
      },
      {
        type: "input",
        message: "What is the employee's manager id",
        name: "manager_id",
      },
    ])
    .then((response) => {
      console.log(response);

      connection.query(`INSERT INTO employee SET ?`, response, (err, res) => {
        if (err) throw err;
        console.log("Successfully added");
        promptUser();
      });
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's title?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the employee's salary?",
        name: "salary",
      },
      {
        type: "input",
        message: "What is the employee's department id?",
        name: "department_id",
      },
    ]) .then((response) => {
        console.log(response);
  
        connection.query(`INSERT INTO role SET ?`, response, (err) => {
          if (err) throw err;
          console.log("Successfully added");
          promptUser();
        });
      });
  }

  function addDepartment() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the name of the department?",
          name: "name",
        },
      ]) .then((response) => {
          console.log(response);
    
          connection.query(`INSERT INTO department SET ?`, response, (err) => {
            if (err) throw err;
            console.log("Successfully added");
            promptUser();
          });
        });
    }

function allRoles() {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}
function allDepartments() {
  connection.query("SELECT * FROM department;", (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}


