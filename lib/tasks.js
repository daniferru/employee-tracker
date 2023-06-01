const inquirer = require('inquirer');
const prompts = require('./prompts.js');
const tasks = require('./tasks.js');
const { retrieve_departments, view_departments } = require('./index.js')

// presents prompt list after completing each task

function selectTask() {
    inquirer
    .prompt(prompts)
    .then((response => {
        console.log(response)
        if (response.task === 'View all departments') {
            view_departments();
        }
    }))
    .catch(err => {
        console.log(err)
    })
};

selectTask();

module.exports = selectTask;