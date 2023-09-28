const inquirer = require('inquirer');

//class CLI
//THIS initials
//THIS shape
//run inquirer to ask user questions
class CLI {
    constructor() {
        this.title = " ";
        // Array of logo objects e.g. [{ text: string, svg]
        this.generatedLogo = [];
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'initials',
                    message: 'What are your initials?',
                },

                {
                    type: 'text',
                    name: 'color',
                    message: 'Choose a color for the initials',
                },

                {
                    type: 'list',
                    name: 'shape',
                    message: 'Choose a shape',
                    choices: 'circle, triangle, square',
                },

                {
                    type: 'text',
                    name: 'shapeColor',
                    message: 'Enter a color keyword or hexadecimal number for the color of the shape',
                },
            ])

            // function to write README file

            .then((data) => {

                const filename = `${data.title.toLowerCase().split(' ').join('_')}.md`;
                const generateMD = generateMarkdown(data)
                console.log('generateMD', generateMD);


                fs.writeFile(filename, generateMD, (err) =>
                    err ? console.log(err) : ('Success!')
                );
            });
    }
}

module.exports = CLI;