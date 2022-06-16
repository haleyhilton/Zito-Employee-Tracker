const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "rootroot",
        database: "company_db",
    },

    console.log("You are now connected to the database")

)

db.connect(err => {
    if (err) throw err // will show error vs. silently crashing
    firstPrompt()
})


//firstPrompt() list of all possible questions
function firstPrompt() {
    inquirer.prompt([{
        type: "list",
        name: "first_question",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "Add Employees",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Quit",
        ]
    }]).then(response => {
        console.log(response.first_question)
        if (response.first_question === "View All Employees") {
            viewEmployees()
        } else if (response.first_question === "Add Employees") {
            addEmployee()
        } else if (response.first_question === "Update Employee Role") {
            updateRole()
        } else if (response.first_question === "View All Roles") {
            viewRoles()
        } else if (response.first_question === "Add Role") {
            addRole()
        } else if (response.first_question === "View All Departments") {
            viewDepartments()
        } else if (response.first_question === "Add Department") {
            addDepartment()
        }
    })

}



//viewEmployee() list
function viewEmployees() {
    db.query("SELECT * FROM employee", function (err, result) {
        if (err) throw err
        console.table(result)
        firstPrompt();
    })
}

function addEmployee() {
    inquirer.prompt([{
        //first_name
        //last_name
        //add role id and department id
    }])
db.query('INSERT INTO employee (first_name, last_name, role_id, department_id) VALUES (?,?,?,?)', [], function (err, result){
    if (err) throw err  
})
}

function viewRoles() {
    db.query("SELECT * FROM roles", function (err, result) {
        console.table(result)
        firstPrompt();
    })
}

function viewDepartments() {
    db.query("SELECT * FROM departments", function (err, result) {
        console.table(result)
        firstPrompt();
    })
}