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

// Fetches all the data of Departments
function selectAllDepartments () {
  const sql = `SELECT * FROM department`;

  db.promise().query(sql)
  .then(([rows,fields]) => {
      (console.table(rows))
      employeeTracker();
  })
};

//Fetches all the employee roles
function selectAllRoles () {
  const sql = `SELECT role.title AS Title, role.salary AS salary, departments.name AS Departments 
  FROM role JOIN departments ON role.department_id = departments.id`;

// creating a promise with a then statement
  db.promise().query(sql)
  .then(([rows,fields]) => {
      (console.table(rows))
      employeeTracker();
  })
};

//fetches all the individual employees
function selectAllEmployees () {
  const sql = `SELECT * FROM employee`;

  db.promise().query(sql)
  .then(([rows,fields]) => {
      (console.table(rows))
      employeeTracker();
  })
};

// adds a department
function addDepartment () {
  inquirer
  .prompt({
      type:'input',
      name: 'department',
      message:'Whats the name of the department you would like to add',
  }).then((answer) => {
      const sql = `INSERT INTO departments (name) VALUES (?)`
      const params = [answer.department]
      db.promise().query(sql, params)
      console.log(`Department has been added to the database`);
      employeeTracker();
  })
}
