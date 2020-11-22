DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,2) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,

SELECT * FROM role;

INSERT INTO role (title, salary, department_id)
VALUES ("Chied HR Officer", 10000, 1), ("Salaes Manager", 12000, 2), ("Marketing Specialist", 14000, 3), ("Customer Representative", 16000, 4), ("Accounting Manager", 18000, 5);  

SELECT * FROM employee;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Elyse", "Griffin", 1, 1), ("Denise", "Hambrick", 2, 5), ("Vanessa", "Rohrer", 3, 4), ("Sandra", "Stasilis", 4, 3), ("Jane", "Smith", 5, 2);


