//Remote and Shipped Modules//
const inquirer = require("inquirer");
const fs = require("fs");

//Prompt Handler//
inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter your email:",
      name: "email",
    },
    {
      type: "input",
      message: "Please enter your Github username:",
      name: "username",
    },
    {
      type: "input",
      message: "Please enter your project title as it appears in the repo:",
      name: "title",
    },
    {
      type: "input",
      message: "Please provide a description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "Please enter the installation instructions:",
      name: "installation",
    },
    {
      type: "input",
      message: "Please enter your usage information:",
      name: "usage",
    },
    {
      type: "list",
      message: "Please select your license:",
      choices: [
        "None",
        "MIT License",
        "GNU Lesser General Public License v3.0",
        "Mozilla Public License 2.0",
        "GNU Affero General Public License v3.0",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "The Unlicense",
      ],
      name: "license",
    },
    {
      type: "input",
      message: "Please enter contribution guidelines:",
      name: "contributions",
    },
    {
      type: "input",
      message: "Please enter test instructions:",
      name: "tests",
    },
  ])
  .then(function (data) {
    //Pull keys from user input//
    const {
      email,
      username,
      title,
      description,
      installation,
      usage,
      license,
      contributions,
      tests,
    } = data;
    //Create Readme//
    fs.writeFile(
      "./generated-readme/README.md",
      `# ${title}
 ## Description
${description}
      
Github repo: https://github.com/${username}/${title}
      
Github deploy: https://${username}.github.io/${title}/
      
## Table of Contents
      
[Installation](#installation)
      
[Usage](#usage)
      
[Credits](#credits)
      
[License](#license)
      
[Questions](#questions)
      
## Installation
      
${installation}
      
## Usage
      
${usage}
      
## License
      
${license}

## Contributions

${contributions}

## Tests

${tests}
      
## Questions
      
Github: https://github.com/${username}

email: ${email}

Please reachout with any questions about the project.`,
      function (err) {
        err
          ? console.log("Something went wrong! Let's try again.")
          : console.log("success!");
      }
    );
  });
