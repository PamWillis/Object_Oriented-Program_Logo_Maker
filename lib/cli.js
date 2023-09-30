const inquirer = require('inquirer');
const fs = require('fs');

const filename ='logo.svg'

class CLI {
    constructor(SVG) {
        return
    }

    run() {
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
                    name: 'shape-image',
                    message: 'Choose a shape',
                    choices: ['circle', 'square', 'triangle']
                },

                {
                    type: 'input',
                    name: 'shape',
                    message: 'Enter a color keyword or hexadecimal number for the color of the shape',
                },
            ])


        // Function to write data to file
function writeToFile(fileName, data) {
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success SVG created!");
    });
}
    }

}

module.exports = CLI;