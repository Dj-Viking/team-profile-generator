const employeeData = require('../index.js');
const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

const templateArray = [];
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

//generate Manager card function
const templateManager = data => {
  data = {
    employees: employeeData.employees
  };
  let managerArr;
  managerArr = employeeData.employees.filter(index => {
    return index instanceof Manager;
  });
  console.log(managerArr);

  return console.log(`
  <div class="card">
  <div class="card-title">
    <p>
      ${managerArr[0].getName()}
    </p>
    <p>
      ${managerArr[0].getRole()}
    </p>
  </div>
  <div class="card-description">
    <p>
      ID: ${managerArr[0].getId()}
    </p>
    <p>
      Email: ${managerArr[0].getEmail()}
    </p>
    <p>
      Office Number: ${managerArr[0].getOfficeNum()}
    </p>
  </div>
</div>
  `);
}


//generate Engineer card function
const templateEng = data => {
  data = {
    employees: employeeData.employees
  };
  let engArr;
  engArr = employeeData.employees.filter(index => {
    return index instanceof Engineer;
  });
  console.log(engArr);

  return /*console.log(*/`
  <div class="card">
  <div class="card-title">
    <p>
      ${engArr[0].getName()}
    </p>
    <p>
      ${engArr[0].getRole()}
    </p>
  </div>
  <div class="card-description">
    <p>
      ID: ${engArr[0].getId()}
    </p>
    <p>
      Email: ${engArr[0].getEmail()}
    </p>
    <p>
      GitHub: ${engArr[0].getOfficeNum()}
    </p>
  </div>
</div>
  `/*)*/;
}
//generate Intern card function
const templateIntern = data => {
  data = {
    employees: employeeData.employees
  };
  let internArr;
  internArr = employeeData.employees.filter(index => {
    return index instanceof Intern;
  });
  console.log(internArr);

  return /*console.log(*/`
  <div class="card">
  <div class="card-title">
    <p>
      ${internArr[0].getName()}
    </p>
    <p>
      ${internArr[0].getRole()}
    </p>
  </div>
  <div class="card-description">
    <p>
      ID: ${internArr[0].getId()}
    </p>
    <p>
      Email: ${internArr[0].getEmail()}
    </p>
    <p>
      School: ${internArr[0].getOfficeNum()}
    </p>
  </div>
</div>
  `/*)*/;
}

//generate overall template
//maybe have to map from an array of HTML employee templates
// for every string template in the array
const overallTemplate = () => {

}


module.exports = templateManager;
