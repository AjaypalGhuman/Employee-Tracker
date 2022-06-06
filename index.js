const inquirer = require("inquirer");
const connection = require("./db/connection");

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  employeeTracker();
});

function employeeTracker() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employees role",
          "Exit prompt.",
        ]
      }
    ])
    .then((response) => {
                if (response.prompt === 'View all departments') {
                    connection.query(`SELECT * FROM department`, (err, result) => {
                        if (err) throw err;
                        console.log("Currently viewing all departments");
                        console.table(res);
                        employeeTracker();
                    });
                } else if (response.prompt === 'View all roles') {
                    connection.query(`SELECT * FROM role`, (err, result) => {
                        if (err) throw err;
                        console.log("Currently viewing all job roles");
                        console.table(res);
                        employeeTracker();
                    });
                } else if (response.prompt === 'View all employees') {
                    connection.query(`SELECT * FROM employee`, (err, result) => {
                        if (err) throw err;
                        console.log("Currently viewing all employees in the database");
                        console.table(res);
                        employeeTracker();
                    });
