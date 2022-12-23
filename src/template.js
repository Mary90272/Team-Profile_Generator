//import classes
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Employee = require('../lib/Intern')

//function to write the html page
const generateHTML =(team) => 
     `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My TEAM</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Merriweather|Muli:300" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">Our <span>TEAM </span> </h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row col-12  justify-content-center  mt-5">
                ${createCards(team)}
            </div>
        </div>
    </body>
    
    </html>
    `

//function to write manager card
const createManagerCard = (Manager) => 
`
<div class="card employee-card mr-4 ml-4 mb-3">
    <div class="manager-header text-center">
        <h2 class="card-title">${Manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${Manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${Manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${Manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
    `

//function to write engineer card
const createEngineerCard = (Engineer) => 
    `
    <div class="card employee-card mr-4 ml-4 mb-3">
        <div class="engineer-header text-center">
            <h2 class="card-title">${Engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${Engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.getGithub()}" target="_blank"
                rel="noopener noreferrer">${Engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
        `

//function to write intern card
const createInternCard = (Intern) => 
    `
    <div class="card employee-card mr-4 ml-4 mb-3">
        <div class="intern-header text-center">
            <h2 class="card-title">${Intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${Intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${Intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `

//function to generate employee card
function createCards(team) {
    let cards = []
    for(let i = 0; i < team.length; i++) {
      const thisEmployee = team[i];
      switch(thisEmployee.getRole()) {
        case 'Manager':
          const manager = new Manager(thisEmployee.id, thisEmployee.name, thisEmployee.email, thisEmployee.officeNumber);
          cards.push(createManagerCard(manager));
          break;
        case 'Engineer':
          const engineer = new Engineer(thisEmployee.id, thisEmployee.name, thisEmployee.email, thisEmployee.github);
          cards.push(createEngineerCard(engineer));
          break;
        case 'Intern':
          const intern = new Intern(thisEmployee.id, thisEmployee.name, thisEmployee.email, thisEmployee.school);
          cards.push(createInternCard(intern));
          break;
      }
    }
    return cards.join(``)
  }

//export generateHTML
module.exports = generateHTML;