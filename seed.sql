INSERT INTO department (name)
VALUES ("Human Resources"), ("Sales"), ("Marketing"), ("Customer Service"), ("Accounting");

INSERT INTO role (title, salary, department_id)
VALUES ("Chied HR Officer", 10000, 1), ("Salaes Manager", 12000, 2), ("Marketing Specialist", 14000, 3), ("Customer Representative", 16000, 4), ("Accounting Manager", 18000, 5);  

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Elyse", "Griffin", 1, 1), ("Denise", "Hambrick", 2, 5), ("Vanessa", "Rohrer", 3, 4), ("Sandra", "Stasilis", 4, 3), ("Jane", "Smith", 5, 2);
