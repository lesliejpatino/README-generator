const fs = require('fs')
const inquirer = require("inquirer");


inquirer
    .prompt([
        {
            type: "input",
            message: "What is your project title?",
            answer: "title"

        },
        {
            type: "input",
            message: "Describe your project:",
            answer: "description"

        },
        // May remove toc
        {
            type: "input",
            message: "tableofcontents",
            answer: ""
        },
        {
            type: "input",
            message: "What are the steps required to install your project?",
            answer: "install"
        },
        {
            type: "input",
            message: "Provide instructions and examples for use:",
            answer: "usage"
        },
        {
            type: "list",
            message: "Which license would you like to use?",
            answer: "license",
            choices : [
                'MIT License',
                'ISC License',
                'Mozilla Public License',
                'Open Database License',
            ]
        },
        {
            type: "input",
            message: "Who contributed to this project?",
            answer: "contributor"
        },
        {
            type: "input",
            message: "What is your email?",
            answer: "email"
            // this needs to be added under questions.
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            answer: "github"
            // this needs to be added under questions
        },

    ])
