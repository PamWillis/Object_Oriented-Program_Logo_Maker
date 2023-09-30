const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require("./Shapes.js");

class Svg {
    constructor() {
      this.textElement = "";
      this.shapeElement = "";
    }
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }
    settextElement(text, color) {
      if (message.length > 3) {
        throw new Error('Letters must not be more than 3 characters.');
      }
      else {
        this.textElement = `<text x="150" y="100" font-size="40" text-anchor="middle" fill="${text - color}" >${text}</text>`;
      }
    }
  
    setshapeElement(Shape) {
      this.shapeElement = Shape.render();
    }

  }
const init =() => {
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What are your initials?',
        },

        {
            type: 'input',
            name: 'text-color',
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
            name: 'shape-color',
            message: 'Enter a color keyword or hexadecimal number for the color of the shape',
        },
    ])

    const filename = 'logo.svg'
// Function to write data to file
function writeToFile(Svg) {
    filesystem.writeFile(fileName, Svg.render, function (err) {
        if (err) {
            return console.log(err);
        }
        else { 
            console.log("Success SVG created!");
        }
    });
}

}
init();

