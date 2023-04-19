INSERT INTO
    departments (department_name)
VALUES
    ('Engineering'),
    ('Sales'),
    ('IT'),
    ('Service');

INSERT INTO
    roles (title, salary, department_id)
VALUES
    ('Server Engineer', 110000, 1),
    ('Network Engineer', 110000, 1),
    ('Sales Rep', 80000, 2),
    ('Help Desk Level 1', 55000, 3),
    ('Help Desk Level 2', 70000, 3),
    ('Field Technician', 75000, 3),
    ('Customer Service Rep', 65000, 4);

INSERT INTO
    employees (first_name, last_name, role_id, employee_salary, manager_id)
VALUES
    ('Jeremy', 'Schreiber', 2, 110000, null),
    ('Arthur', 'Dobber', 1, 110000, null),
    ('Stephanie', 'Simmons', 3, 80000, 4),
    ('Melanie', 'Malindez', 3, 80000, null),
    ('Jeff', 'Burnham', 4, 55000, 1),
    ('Dave', 'Deluise', 4, 55000, 1),
    ('Steve', 'Carmine', 5, 70000, 1),
    ('Chase', 'Bower', 6, 75000, 2),
    ('Karen', 'Burdow', 7, 65000, null);