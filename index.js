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
        // {
        //     type: "input",
        //     message: "tableofcontents",
        //     answer: ""
        // },
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
        // {
        //     type: "input",
        //     message: "Licensing",
        //     answer: "license"
        // },
        {
            type: "input",
            message: "Who contributed to this project?",
            answer: "contributor"
        },
        // {
        //     type: "input",
        //     message: "Test",
        //     answer: "test"
        // },
        // {
        //     type: "input",
        //     message: "Questions",
        //     answer: "questions"
        // },

    ])




// MIT License

// Copyright (c) [year] [fullname]

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.