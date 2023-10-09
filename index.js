// npm install of inquirer and mysql2 (in config) required
const inquirer = require("inquirer");
var con = require("./config/connection.js");

// options that will appear when prompted
const questions = [
    {
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", 
        "Add Role", "View All Departments", "Add Department", "Quit"],
        name: "options"
    },
];

// inquirer to prompt questions and get data from database
inquirer
    .prompt(questions)
    .then(function (choice) {

        if (choice.options === "View All Employees") {
            con.query("SELECT * FROM employee JOIN department ON employee.department_id = department.id;", function (err, result) {
                if (err) throw err;
                console.log(result);
            });
            
        } else if (choice.options === "View All Roles") {
            con.query("SELECT * FROM roles JOIN department ON roles.department_id = department.id;", function (err, result) {
                if (err) throw err;
                console.log(result);
            });

        } else if (choice.options === "View All Departments") {
        con.query("SELECT * FROM department", function (err, result) {
                if (err) throw err;
                console.log(result);
            });

        } else if (choice.options === "Quit") {
            console.log("Goodbye");
        }
    });