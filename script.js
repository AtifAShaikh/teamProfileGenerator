const inquirer = require('inquirer');
const fs = require('fs');
const {Employee, Manager, Engineer, Intern} = require('./lib');
const {startString, endString} = require('./htmlStrings');

var teamManager;
var teamEngineers = [];
var teamInterns = [];

const chooseEmployeeType = async () => {
    
    let userChoice = await inquirer.prompt([
        {
            type: 'list',
            message: 'Choose a type of Employee to add',
            name: 'choice',
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ]);

    if(userChoice.choice == 'Engineer'){
        getEngineer();
    } else if (userChoice.choice == "Intern"){
        getIntern();
    } else if (userChoice.choice == 'Finish'){
        createPage();
    }


}

const getManager = async () => {

    console.log('Welcome to the team profile generator!')

    let ManagerData = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the manager: ',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is the Employee ID: ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the Email: ',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the Office ID: ',
            name: 'officeID',
        },
    ]);

    teamManager = new Manager(ManagerData.managerName, ManagerData.id, ManagerData.email, ManagerData.officeID);
    console.log(teamManager);

    chooseEmployeeType();
}

const getEngineer = async () => {

    let ManagerData = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the Engineer: ',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is the Employee ID: ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the Email: ',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the GithHub Username: ',
            name: 'gitHub',
        },
    ]);

    let newEng = new Engineer(ManagerData.managerName, ManagerData.id, ManagerData.email, ManagerData.officeID);
    teamEngineers.push(newEng);
    
    chooseEmployeeType();
}

const getIntern = async () => {

    let ManagerData = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the manager: ',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is the Employee ID: ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the Email: ',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the School: ',
            name: 'school',
        },
    ]);

    let newInt = new Intern(ManagerData.managerName, ManagerData.id, ManagerData.email, ManagerData.school);
    teamInterns.push(newInt)

    chooseEmployeeType();
}

const createPage = () => {

    // console.log(teamManager);
    // console.log(teamEngineers);
    // console.log(teamInterns);

    let stringToAppend = '';
    stringToAppend += startString;
    stringToAppend += teamManager.getCard();

    teamEngineers.forEach(element => {
        stringToAppend += element.getCard();
    });

    teamInterns.forEach(element => {
        stringToAppend += element.getCard();
    });

    stringToAppend += endString;

    fs.writeFile('teamProfile.html', stringToAppend, (err) => {
        err ? console.error(err) : console.log('Profile Generated, see teamProfile.html.')
    })
}



getManager();