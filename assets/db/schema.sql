DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT, 
    FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    title INT,
    salary INT,
    manager_id VARCHAR(30),
    department_id INT,
    role_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id),
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
);