// Import required packages for 
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from "./Utilities/generateMarkdown.js";

// Questions Array
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'Please provide your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation instructions of your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide a short example on how to use your project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide the contributors info for your project:',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide the testing instructions for your project:',
    },
    {
        type: 'input',
        name: 'q_author',
        message: 'Please enter your name:',
    },
    {
        type: 'input',
        name: 'q_userName',
        message: 'Please enter your gitHub username:',
    },
    {
        type: 'input',
        name: 'q_email',
        message: 'Please enter your e-mail:',
    },
    {
        type: 'input',
        name: 'q_link',
        message: 'Please enter the link to your running application:',
    },
    {
        type: 'input',
        name: 'q_repo',
        message: 'Please enter the link to your application repository:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license to be added to your project:',
        choices: [
            { name: 'apache', value: 'Apache' },
            { name: 'boost', value: 'Boost' },
            { name: 'mit', value: 'MIT' },
            { name: 'mozilla', value: 'Mozilla' },
            { name: 'odbl', value: 'ODbL' }
        ]
    }

];

// function to create README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err){
        err ? console.error(err) : console.log('README file created!');
    });

}

// function to initialize app
function init() {

    inquirer.prompt(questions).then((answers) => {

        writeToFile('README.md', generateMarkdown(answers));

    });

}

// call initialization function
init();