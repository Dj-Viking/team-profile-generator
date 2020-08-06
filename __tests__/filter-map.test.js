const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const manager = new Manager('Don', '1', 'email@mail.com', '123-123-1232');
const engineer = new Engineer('Jim', '2', 'email@mail.com', 'github');
const intern = new Intern('Julie', '3', 'email@mail.com', 'Vanderbilt');

const mockArray = [
    manager,
    manager,
    engineer,
    engineer,
    engineer,
    engineer,
    intern,
    intern,
    intern
];

test(`check if the filter().map() methods are getting the repeat Manager instances 
and appending the info to generate multiple sections of the same Employee`, () => {
  expect(mockArray.filter(index => index instanceof Manager)
    .map(index => {
      return `
  <div class="card">
    <div class="card-title">
      <p>
        ${index.getName()}
      </p>
      <p>
        ${index.getRole()}
      </p>
    </div>
    <div class="card-description">
      <p>
        ID: ${index.getId()}
      </p>
      <p>
        Email: ${index.getEmail()}
      </p>
      <p>
        Office Number: ${index.getOfficeNum()}
      </p>
    </div>
  </div>`
    }).join('')  
  ).toBe(`
  <div class="card">
    <div class="card-title">
      <p>
        Don
      </p>
      <p>
        Manager
      </p>
    </div>
    <div class="card-description">
      <p>
        ID: 1
      </p>
      <p>
        Email: email@mail.com
      </p>
      <p>
        Office Number: 123-123-1232
      </p>
    </div>
  </div>
  <div class="card">
    <div class="card-title">
      <p>
        Don
      </p>
      <p>
        Manager
      </p>
    </div>
    <div class="card-description">
      <p>
        ID: 1
      </p>
      <p>
        Email: email@mail.com
      </p>
      <p>
        Office Number: 123-123-1232
      </p>
    </div>
  </div>`);
})