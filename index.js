const fs = require('fs')
const inquirer = require("inquirer");

// variables to store license information. object data type.
// MIT 
const licenseInfo = {
    MIT: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
    ISC: 'Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies. THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.',
    Unlicense: 'This is free and unencumbered software released into the public domain. Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means. In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.For more information, please refer to <http://unlicense.org/>'
}


var updateLicense = function(holder, license){

    return `Copyright 2022 <${holder}>
    ${licenseInfo[license]}
    `
}


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
                'Unlicense',
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

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)
* [License](#license)

## Description 
* ${answers.description}

## Installation 
* ${answers.install}

## Usage
* ${answers.usage}

## Questions
*[Visit My GitHub](https://github.com/${answers.github})
* If you have any additional questions, please contact me at: ${answers.email}
   
## License
* ${updateLicense(answers.contributor, answers.license)}
`
fs.writeFile('README.md', readMe, (err) => {
    if (err) {
        console.log(err);
    }
})

})

