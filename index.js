// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); //File system -helps to read/write a file 
const generateMarkdown = require('./utils/generateMarkDown');
// TODO: Create an array of questions for user input
const questions = [
    //10-11 questions 
    /*
    Description, Table of Contents, Installation, Usage, License, Contributing, Tests, 
    
    WHEN I enter my GitHub username
    WHEN I enter my email address
    */

    {
        type: 'input',
        name: 'githubID',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(`creating ${fileName}`); 

    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), err =>
        err ? console.log(err) : console.log('Generated readme file sucessfully!')
    );
}

// TODO: Create a function to initialize app
function init() {
    console.log("welcome to readme generator");
    //ask questions to the user 
    inquirer.prompt(questions).then(response => {
        console.log(response);
        //REDME format friendy 
        let data = generateMarkdown(response);
        console.log("Converted int o README format ", data);

        //generate your reame.md file 
        writeToFile("README.md", data); 
    })
}

// Function call to initialize app
init();