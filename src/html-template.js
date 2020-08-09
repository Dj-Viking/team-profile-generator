const employeeData = require('../index.js');
const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

// mock object instances
// const manager = new Manager("bob", '1', 'email', '123-123-1231')
// const engineer = new Engineer('Jim', '2', 'email@mail.com', 'github');
// const intern = new Intern('Julie', '3', 'email@mail.com', 'Vanderbilt');

//mock imported array of object instances
// const importedObj = {
//   employees: [manager, manager, engineer, intern]
// }

// const employeeDataImport = {
//   employees: employeeData.employees
// }
//generate Manager card function
// const data = {
//   employees: employeeData.employees
// }

// console.log(employeeData);
//generate overall template
//maybe have to map from an array of HTML employee templates
// for every string template in the array
generateFile = data => {
  // data = {//mock data import
  //   employees: employeeData.employees
  // }

  
  const templateManager = () => {
    // for (let i = 0; i < data.employees.length; i++) {
      return `
      ${data.employees.filter(item => item instanceof Manager)
      .map(item => {
        return `
      <div class="card">
        <div class="card-title">
          <p>
            ${item.getName()}
          </p>
          <p class="italic-custom">
          <span class="oi oi-person"></span>${item.getRole()}
          </p>
        </div>
        <div class="card-description">
          <p>
            ID: ${item.getId()}
          </p>
          <p>
            <span>Email: <a href="mailto:${item.getEmail()}">${item.getEmail()}</a></span>
          </p>
          <p>
            Office Number: ${item.getOfficeNum()}
          </p>
        </div>
      </div>
        `
      }).join('')}`
    //}
  }
  //templateManager();
  
  //generate Engineer card function
  const templateEng = () => {
    return `
    ${data.employees.filter(item => item instanceof Engineer)
    .map(item => {
      return `
      <div class="card">
        <div class="card-title">
          <p>
            ${item.getName()}
          </p>
          <p class="italic-custom">
          <span class="oi oi-wrench"></span>${item.getRole()}
          </p>
        </div>
        <div class="card-description">
          <p>
            ID: ${item.getId()}
          </p>
          <p>
            <span>Email: <a href="mailto:${item.getEmail()}">${item.getEmail()}</a></span>
          </p>
          <p>
            <span>GitHub: <a target="_blank" href="http://github.com/${item.getGithub()}">${item.getGithub()}</a></span>
          </p>
        </div>
      </div>
      `;
    }).join('')}`
  }
  
  //generate Intern card function
  const templateIntern = () => {
    return `
    ${data.employees.filter(item => item instanceof Intern)
    .map(item => {
  
      return `
      <div class="card">
        <div class="card-title">
          <p>
            ${item.getName()}
          </p>
          <p class="italic-custom">
          <span class="oi oi-book"></span>${item.getRole()}
          </p>
        </div>
        <div class="card-description">
          <p>
            ID: ${item.getId()}
          </p>
          <p>
            <span>Email: <a target="_blank" href="mailto:${item.getEmail()}">${item.getEmail()}</a></span>
          </p>
          <p>
            School: ${item.getSchool()}
          </p>
        </div>
      </div>
      `
    }).join('')}`
  }
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>creating template</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header>
      <h1>
        Our Company Team
      </h1>
    </header>
    <section class="card-container">
      ${templateManager()}
      ${templateEng()}
      ${templateIntern()}
    </section>
  </body>
</html>
  `;

}
// generateFile(importedObj);

module.exports = {generateFile};



//essentially should contain ALL entries even if we add 100 people
// the questions will not stop until the prompt gets the answer
// that the user doesn't want to add anymore employees
// then the data is sent into this file to place the data in the HTML


//Or as we get each object until we are done, stored into the inquirer's
// array, and filter out each object by their job roles into the
// functions that they need to be placed in
//** all good we got the array with all the employees in it whenever prompt is finished

//filter the array of objects to their specified functions
// by what their job roles are