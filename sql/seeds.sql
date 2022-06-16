INSERT INTO department (name) 
VALUES ('HR'), ('Finance'), ('Engineering');

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Haley', "Zito", 1, 1), 
('Austin', "Zito", 2, 1), 
('Renee', "Hilton", 5, 1), 
('Tater', "Puff", 1, NULL);

INSERT INTO role (title, salary)
VALUES ("HR Associate", 75000),
       ("Senior Accounts Payable", 150000),
       ("Accounts Receivable", 90000),
       ("Software Engineer", 210000),
      