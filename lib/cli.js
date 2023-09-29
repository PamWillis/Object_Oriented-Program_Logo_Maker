const inquirer = require('inquirer');
const fs = require('fs')


const questions = [];

class CLI {
    constructor() {
        this.title = '';
        //title should equal text.initials?
    
    }
    run() {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'initials',
                    message: 'What are your initials?',
                },

                {
                    type: 'text',
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
                    type: 'text',
                    name: 'shapeColor',
                    message: 'Enter a color keyword or hexadecimal number for the color of the shape',
                },
            ])

            // function to write HTML file

            .then((data) => {

                const filename = `${data.title.toLowerCase().split(' ').join('_')}.md`;
                const generatedLogo = createDocument(data)
                console.log('generatedLogo'), generatedLogo;



        fs.writeFile(filename, generatedLogo, (err) =>
            err ? console.log(err) : ('Success!')
        );
    });
}}


module.exports = CLI;