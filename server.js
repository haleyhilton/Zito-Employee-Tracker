const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
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
function firstPrompt(){
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
    })
}



//viewEmployee() list
function viewEmployees(){
db.query("SELECT * FROM employee", function(err, result){
    console.table(result)
    firstPrompt();
})
}

function viewRoles(){
    db.query("SELECT * FROM roles", function(err, result){
        console.table(result)
        firstPrompt();
    })
    }
    
function viewDepartments(){
        db.query("SELECT * FROM departments", function(err, result){
            console.table(result)
            firstPrompt();
        })
        }