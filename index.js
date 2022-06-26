// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); //File system -helps to read/write a file 
const generateMarkdown = require('./utils/generateMarkDown');
// TODO: Create an array of questions for user input
const questions = [
    //10-11 questions 
    /* 

    */


    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project'
    },

    {
        type: 'list',
        message: 'Please select the licsence type.',
        name: 'license',
        choices: ['MIT', 'Mozilla Public License 2.0', 'Apache license 2.0', 'None']
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address?'

    }, {
        type: 'input',
        name: 'githubID',
        message: 'What is your github username?'
    }, {
        tyoe: 'confirm',
        name: 'tableofContents',
        message: 'would you like to include Table of Contents (y/n)',
        default: true
     },{
         tyoe: 'input',
         name: 'installation',
         message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running'
     },{
         type: 'input',
         name: 'usage',
         message: 'Provide instructions and examples for use. Include screenshots as needed'
     },{
         type: 'input',
         name: 'contribute',
         message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so'
     },{
         type: 'input',
         name: 'tests',
         message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here'
     }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log(`creating ${fileName}, ${data}`);

    fs.writeFile(fileName, data, err =>
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
        let readmeFormat = generateMarkdown(response);
        // console.log("Converted into README format ", data);

        //generate your readme.md file 
        writeToFile("README.md", readmeFormat);
    })
}

// Function call to initialize app
init();