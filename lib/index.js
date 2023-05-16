const db = require('../config/connection.js');

//Retrieve departments
async function retrieve_departments(response) {
    let department_list;
    let returnValue = await db.promise().query(`
    SELECT * FROM department
    `).then( (data) => {
        department_list = data[0].map(data => {
            return {
                name: data.name,
                value: data.id
            }
        })
        return department_list
    }).catch(err => {
        console.log(err);
    })
    return returnValue
};

module.exports = retrieve_departments;

// Retrieve employee
async function retrieve_employees(response) {
    let employee_list;
    let returnValue = await db.promise().query(`
    SELECT * FROM employee
    `).then( (data) => {
        employee_list = data[0].map(data => {
            return {
                name: data.first_name + ` ` + data.last_name,
                value: data.id
            }
        })
        employee_list.push({name: 'NONE', value:0});
        return employee_list
    }).catch(err => {
        console.log(err);
    })
    return returnValue
};

module.exports = retrieve_employees;

// Retrieve role
async function retrieve_role(response) {
    let role_list;
    let returnValue = await db.promise().query(`
    SELECT * FROM role
    `).then( (data) => {
        role_list = data[0].map(data => {
            return {
                name: data.title,
                value: data.id
            }
        })
        return role_list
    }).catch(err => {
        console.log(err);
    })
    return returnValue
};

module.exports = retrieve_role;

// Add SQL queries
function add_department(response) {
    db.query(`
    INSERT INTO department (name)
    VALUES
    ('${response.department}');
    `, (err, res) => {
        if (err) throw err;
        console.log(`${response.department} department added`);
        const selectTask = require('./tasks.js');
        selectTask();
    });
};

function add_role(response) {
    db.query(`
    INSERT INTO role (title, salary, department_id)
    VALUES
    ('${response.role_title}', '${response.role_salary}', '${response.department_role}')
    `, (err, res) => {
        if (err) throw err;
        console.log(`${response.role_title} role added!`);
        const selectTask = require('./tasks.js');
        selectTask();
    });
};

function add_employee(response) {
    db.query(`
    INSERT INTO employee(first_name, last_name, role_id, manager_id)
    VALUES
    ('${response.employeeFirstName}', '${response.employeeLastName}', '${response.employeeRole}', '${response.employeeManager}')
    `, (err, res) => {
        if (err) throw err;
        console.log(`Employee ${response.employeeFirstName} ${response.employeeLastName} added!`);
        const selectTask = require('./tasks.js');
        selectTask();
    });
};

module.exports = { add_department, add_role, add_employee };

//Query updates
function update_role(response) {
    db.query(`
    UPDATE employee SET role_id = ${response.UpdateRole} WHERE employee.id = ${response.updateEmployee}
    `, (err, res) => {
        if (err) throw err;
        console.log('Employee role updated!');
        const selectTask = require('./tasks.js');
        selectTask();
    });
};

module.exports = update_role;

//View SQL queries

function view_departments() {
    db.query(`
    SELECT department.id AS department_id, department.name AS department_name FROM department;
    `, (err, res) => {
        if (err) throw err;
        console.table(res);
        const selectTask = require('./tasks.js');
        selectTask();
    });
};

function view_roles() {
    db.query(`
    SELECT role.title AS job_title, role.id AS role_id, department.name AS department, role.salary FROM role 
    INNER JOIN department ON role.department_id = department.id;
    `, (err, res) => {
        if (err) throw err;
        console.table(res);
        const selectTask = require('./tasks.js');
        selectTask();
    });
};

function view_employees() {
    db.query (`
    SELECT employee.id AS employee_id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary AS salary, CONTACT(manager.first_name, SPACE(1), manager.last_name) AS manager_name FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id;
    `, (err, res) => {
        if (err) throw err;
        console.table(res);
        const selectTask = require('./tasks.js');
        selectTask();
    });
};

module.exports = { view_departments, view_roles, view_employees };