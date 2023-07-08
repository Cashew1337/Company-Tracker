INSERT INTO department (dpt_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Support"),
       ("FT");


INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Server Engineer", 120000, 2),
       ("Account Manager", 90000, 1),
       ("Help Desk Level 1", 45000, 3),
       ("Field Technician", 65000, 4),
       ("Field Engineer", 85000, 4);
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Matt", "Caschetto", 7, null),
       ("Dan", "Bruton", 3, 3),
       ("Kyle", "Hair", 2, null), 
       ("Matt", "Andrews", 3, 3),
       ("Rob", "Fortin", 3, 3),
       ("Sean", "Bennett", 1, 7),
       ("Norman", "Hair", 4, null);
