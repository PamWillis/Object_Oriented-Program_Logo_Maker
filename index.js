const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require("./lib/Shapes.js")


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
        choices: ['circle', 'square', 'triangle']
      },

      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword or hexadecimal number for the color of the shape',
      },
    ];

  //writes file
  const writeToFile = (filename, data) => {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
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




