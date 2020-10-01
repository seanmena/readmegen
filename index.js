const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// // function to initialize program
// function init() {
// }
// // function call to initialize program
// init();

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your project called?"
    },
    {
      type: "input",
      name: "description",
      message: "Give a brief description of your project"
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install it?"
    },
    {
      type: "input",
      name: "contents",
      message: "What is your table of contents?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn"
    },
    {
     type: "list",
     name: "license",
     message: "Select a License",
     choices: [
            "Apache License 2.0",
            "BSD 3-Clause (New or Revised) license",
            "BSD 2-Clause (Simplified or FreeBSD) license",
            "GNU (General Public License GPL)",
            "GNU Library or (Lesser General Public License LGPL)",
            "MIT license",
            "Mozilla Public License 2.0",
            "Common Development and Distribution License",
            "Eclipse Public License version 2.0"
        ]
    }
  ])
}

function createRME(answers) {
  return ` My project is called ${answers.name}.

   description: ${answers.description}.

   This is how you install it: ${answers.installation}.

   Here is my table of contents: ${answers.contents}

   My github username is ${answers.github}.

   My LinkedIn name is ${answers.linkedin}.

   This is the License I used: ${answers.license}.

  `;
}

promptUser()

  .then((answers) => {
    const readme = createRME(answers);
    return fs.writeFile("readme.md", readme, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("got it!")
    })
    });

  // .then(function() {
  //   console.log("Successfully wrote to index.html");
  // })
  // .catch(function(err) {
  //   console.log(err);
  // });