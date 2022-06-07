const inquirer = require("inquirer");
const db = require("./db/connection");
const table = require("console.table");

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  employeeTracker();
});

// initial prompt
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
        ],
      },
    ])
    .then((response) => {
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
}

const selectAllDepartments = () => {
  let query = "SELECT * FROM department";

  db.query(query, (err, result) => {
    if (err) throw err;
    console.table(result);

    employeeTracker();
  });
};

const selectAllRoles = () => {
  let query = "SELECT * FROM role";

  db.query(query, (err, result) => {
    if (err) throw err;
    console.table(result);

    employeeTracker();
  });
};

const selectAllEmployees = () => {
  let query = "SELECT * FROM employee";

  db.query(query, (err, result) => {
    if (err) throw err;
    console.table(result);

    employeeTracker();
  });
};

const addDepartment = () => {
  inquirer
    .prompt({
      type: "input",
      message: "Enter the department name.",
      name: "departmentName",
    })
    .then(function (answer) {
      db.query(
        "INSERT INTO department (name) VALUES (?)",
        [answer.departmentName],
        (err, result) => {
          if (err) throw err;
          console.table(result);

          employeeTracker();
        }
      );
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the name of the role.",
        name: "roleName",
      },
      {
        type: "input",
        message: "Enter the salary for the role.",
        name: "salary",
      },
      {
        type: "input",
        message: "Enter the departments ID.",
        name: "departmentId",
      },
    ])
    .then(function (answer) {
      db.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [answer.roleName, answer.salary, answer.departmentId],
        (err, result) => {
          if (err) throw err;
          console.table(result);

          employeeTracker();
        }
      );
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the employees first name.",
        name: "firstName",
      },
      {
        type: "input",
        message: "Enter the employees last name.",
        name: "lastName",
      },
      {
        type: "input",
        message: "Enter the employees role ID.",
        name: "roleId",
      },
      {
        type: "input",
        message: "Enter the managers ID.",
        name: "managerId",
      },
    ])
    .then(function (answer) {
      db.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [answer.firstName, answer.lastName, answer.roleId, answer.managerId],
        (err, result) => {
          if (err) throw err;
          console.table(result);

          employeeTracker();
        }
      );
    });
};

const updateEmployeeRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "Enter the employees first name that you would like to update.",
        name: "updateEmployee",
      },

      {
        type: "input",
        message: "Enter the new role ID number.",
        name: "updateRole",
      },
    ])
    .then(function (answer) {
      db.query(
        "UPDATE employee SET role_id=? WHERE first_name= ?",
        [answer.updateRole, answer.updateEmployee],
        (err, result) => {
          if (err) throw err;
          console.table(result);

          employeeTracker();
        }
      );
    });
};
