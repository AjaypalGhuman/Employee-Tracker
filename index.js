const inquirer = require("inquirer");
const db = require("./db/connection");
const table = require("console.table");

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  employeeTracker();
});

function employeeTracker() {
  inquirer.prompt([
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
        "Update an employees role"
      ],
    },
  ]).then((response) => {
    switch (response.option) {
      case "View all departments":
        selectAllDepartments();
        break;
      case "View all roles":
        selectAllRoles();
        break;
      case "View all employees":
        selectAllEmployees();
        break;
      case "Add a department":
        addDepartment();
        break;
      case "Add a role":
        addRole();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Update an employees role":
        updateEmployeeRole();
        break;
    }
  });
};
