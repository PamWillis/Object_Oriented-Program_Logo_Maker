const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require("./lib/Shapes.js")
const path = require('path');


  const Inputs = [
      {
        type: 'input',
        name: 'text',
        message: 'What are your initials?',
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
      {
        type: 'input',
        name: 'validate',
        message: ['default, filter, validate, tramsformer'],

      }
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
        writeToFile('logo.svg', generateLogo(answers));
      });
  }

  init();




