const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


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
      name: "github",
      message: "Link to the github"
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
  return ` 
   # ${answers.name}.

    ${answers.description}.

   ## Installation

    ${answers.installation}.

   ## Github
   
    ${answers.github}.

   ## Find me on linkedin
    ${answers.linkedin}.

   ## License
    ${answers.license}.
  `;
}

promptUser()

  .then((answers) => {
    const readme = createRME(answers);
    return fs.writeFile("README.md", readme, function(err) {
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