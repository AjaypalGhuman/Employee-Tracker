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
                        console.log("Currently viewing all departments: ");
                        console.table(res);
                        employeeTracker();
                    });