const catchDepartments = require('./catchDepartments');
const catchRole = require('./catchRole');
const catchEmployee = require('./catchEmployee');

const prompts = [
    {
        type: 'list',
        name: 'task',
        message: 'SELECT TASK:',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'EXIT'],
    },
    // Add a department
    {
        type:'input',
        name: 'department',
        message: 'ENTER NEW DEPARTMENT NAME',
        when: (response) => {
            if (response.task === 'Add a department') {
                return true;
            }
            return false;
        },

        //ensure input is not blank
        validate: (response) => {
            if (response === "") {
                return console.log('Try again')
            }
            return true;
        }
    },
    //Add a role
    {
        type: 'input',
        name: 'role',
        message: 'ENTER NEW ROLE:',
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            }
            return false;
        },
        validate: (response) => {
            if (response === "") {
                return console.log('Try again');
            }
            return true;
        }
    },
    // Salary
    {
        type: 'input',
        name: 'salary',
        message: 'ENTER SALARY',
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            }
            return false;
        },
        validate: (response) => {
            if (response === "") {
                return console.log('Try again');
            }
            return true;
        }
    },

    {
        type: 'list',
        name: 'department_role',
        message: 'SELECT DEPARTMENT:',
        choices: retrieveDepartments,
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            }
            return false;
        }
    },
    //New employee
    {
        type: 'input',
        name: 'employeeFirstName',
        message: 'ENTER FIRST NAME:',
        when: (response) => {
            if (response.task === 'Add employee first name') {
                return true;
            }
            return false;
        },

        validate: (response) => {
            if (response === "") {
                return console.log('Try again');
            }
            return true;
        }
    },
    
    {
        type: 'input',
        name: 'employeeLastName',
        message: 'ENTER LAST NAME:',
        when: (response) => {
            if (response.task === 'Add employee last name') {
                return true;
            }
            return false;
        },

        validate: (response) => {
            if (response === '') {
                return console.log('Try again');
            }
            return true;
        }
    },

    {
        type: 'list',
        name: 'employee_role',
        message: 'SELECT EMPLOYEE ROLE:',
        choices: retriveRole,
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            }
            return false;
        }
    },

    {
        type: 'input',
        name: 'manager',
        message: 'SELECT EMPLOYEE MANAGER:',
        choices: retrieveEmployee,
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            }
            return false;
        }
    },
    // Updates
    {
        type: 'list',
        name: 'updateEmployee',
        message: 'SELECT EMPLOYEE:',
        choices: retrieveEmployee,
        when: (response) => {
            if (response.task === 'Update an employee role') {
                return true;
            }
            return false;
        }
    },
    {
        type: 'list',
        name: 'UpdateRole',
        message: 'SELECT NEW ROLE:',
        choices: retrieveRole,
        when: (response) => {
            if (response.task === 'Update an employee role') {
                return true;
            }
            return false;
        }
    },
];

module.exports = prompts;