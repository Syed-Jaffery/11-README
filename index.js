const fs = require("fs");
const path = require('path');
import inquirer = require('inquirer');
import { type } from 'os';
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user


const questions = [
{
type: 'input',
name: 'title',
message:'What is the project title?',
validate: (value) => {if (value) {return true}; else {return 'Please enter a project title!'}}
},

{
  name: 'description',
  type: 


}

type: 'input',
name: 'description',
message:'What is the project title?',
validate: (value) => {if (value) {return true}; else {return 'Please enter a project description!'}}
{
  
}


{
  type: 'input',
  : 'description?',
  message:'project description?',
  validate: (value) => {if (value) {return true}; else {return 'Please enter a project description!'}} 
},

{
  type: 'input',
  name: 'installation',
  message:'provide app installation instructions',
  validate: (value) => {if (value) {return true}; else {return 'Please provide app installation instructions!'}}
},

{
  type: 'input',
  name: 'usage',
  message:'provide app installation instructions',
  validate: (value) => {if (value) {return true}; else {return 'Please provide app installation instructions!'}}
}


];

inquirer
.prompt(questions)
.then((answers) => {(


)

  console.log(answers);
  fs.writeFile('text.md', generateMarkdown(answers), (err) => console.log(err));
})

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// // function call to initialize program
// init();
