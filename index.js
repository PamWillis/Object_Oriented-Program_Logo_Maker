const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require("./lib/Shapes.js")
const path = require('path');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

  const Inputs = [
      {
        type: 'maxlength-input',
        name: 'text',
        message: 'Enter up to 3 characters',
        maxLength: 3
      },

      {
        type: 'input',
        name: 'textColor',
        message: 'Choose a color for the initials',
      },

      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape',
        choices: ['Circle', 'Square', 'Triangle']
      },

      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword or hexadecimal number for the color of the shape',
      },
      
    ];

  //writes file
  const writeToFile = (filename, data) => {
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
  };

  //initiate node app
  const init = () => {
    inquirer
      .prompt(Inputs)
      .then((answers) => {
        (console.log)
        writeToFile('logo.svg', generateLogo(answers));
      });
  }

  init();

  //delete this line later
  




