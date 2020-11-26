INSERT INTO department (name)
VALUES ("Engineering"), ("Sales"), ("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 2), ("Sales Person", 80000, 2), ("Lead Engineer", 150000, 1), ("Software Engineer", 120000, 1), ("Account Manager", 160000, 3), ("Account", 120000, 3), ("Legal Team Lead", 250000, 4), ("Lawyer", 190000, 4), ("Software Engineer", 120000, 1); 


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null), ("Mike", "Chan", 2, 1), ("Ashley", "Rodriguez", 3, null), ("Kevin", "Tupik", 4, 3), ("Kunal", "Singh", 5, null), ("Malia", "Brown", 6, 5), ("Sarah", "Lourd", 7, null), ("Tom", "Allen", 8, 7), ("Bob", "Smith", 9, 3);

-- All Employees 
SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, name AS Department
FROM employee 
LEFT JOIN role ON employee.role_id = role_id 
LEFT JOIN department ON role.department_id = department_id;

-- Employee's by Department
SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary 
FROM employee
LEFT JOIN role ON employee.role_id = role.id
INNER JOIN department ON role.department_id = department.id
WHERE department.id = 1;

-- View all departments 
SELECT * FROM department;

-- View all roles 
SELECT * FROM role;

-- View All Employees by Manager --  
SELECT employee.manager_id AS 'Manager ID', manager.first_name, manager.last_name AS 'Manager Name',
employee.id AS 'Employee ID', employee.first_name, employee.last_name 'Employee'
FROM employee employee
INNER JOIN employee manager ON employee.manager_id = manager.id
WHERE employee.manager_id IS NOT NULL
ORDER BY 'Manager Name';

DELETE FROM role
WHERE  employee.id = 13;

DELETE FROM role
WHERE  role.id = 10;

DELETE FROM department
WHERE  department.id = 5;
