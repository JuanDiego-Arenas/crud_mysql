CREATE DATABASE IF NOT EXISTS crud_mysql;

USE crud_mysql;

CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_employee VARCHAR(255) DEFAULT NULL,
    salary INT(6) DEFAULT NULL
);

DESC employees;

--* <--- Insertar empleados --->
--* <--- Insertar empleados --->
INSERT INTO employees (name_employee, salary)
VALUES
    ('Jose', 1000),
    ('Maria', 1500),
    ('Eduardo', 2000),
    ('Yineth', 2500);

--* <--- Listar empleados --->
SELECT * FROM employees;

--* <--- Listar empleados por id --->
SELECT * FROM employees WHERE id = 2;

--* <--- Eliminar empleado --->
UPDATE employees SET name_employee = 'Juan Diego Arenas', salary = 3000 WHERE id = 2;

--* <--- Eliminar empleado --->
DELETE FROM employees WHERE id = 20;