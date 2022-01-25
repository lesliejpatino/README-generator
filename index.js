const fs = require('fs')
const inquirer = require("inquirer");

// variables to store license information. object data type.
// MIT 
// const licenseInfo = {
//     MIT: "Mit",
//     ISC: "",
//     "MPL_2.0": ""
// }


// var updateLicense = function(holder, license){

//     return `Copyright 2022 <${holder}>
//     ${licenseInfo[license]}
//     `
// }


inquirer
    .prompt([
        {
            type: "input",
            message: "What is your project title?",
            name: "title"

        },
        {
            type: "input",
            message: "Describe your project:",
            name: "description"

        },
        {
            type: "input",
            message: "What are the steps required to install your project?",
            name: "install"
        },
        {
            type: "input",
            message: "Provide instructions and examples for use:",
            name: "usage"
        },
        {
            type: "list",
            message: "Which license would you like to use?",
            name: "license",
            choices : [
                'MIT',
                'ISC',
                'MPL_2.0',
            ]
        },
        {
            type: "input",
            message: "Who contributed to this project?",
            name: "contributor"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
            // this needs to be added under questions.
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
            // this needs to be added under questions
        },
    ]).then(answers => {
        let readMe = `# ${answers.title}
![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-brightgreen.svg)
