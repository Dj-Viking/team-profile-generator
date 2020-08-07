const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
// const importedObj = require('../index.js');

const manager = new Manager('Don', '1', 'email@mail.com', '123-123-1232');
const engineer = new Engineer('Jim', '2', 'email@mail.com', 'github');
const intern = new Intern('Julie', '3', 'email@mail.com', 'Vanderbilt');

const tempArray = [
    manager,
    engineer,
    intern
]

// const noManagerArr = [
//   engineer,
//   intern,
// ]

const importedObj = {
  employees: [engineer, intern, manager]
}

test("checks if the filter() is filtering out the Manager index", () => {
  let array = tempArray.filter(index => {
    return index instanceof Manager;
  });
  expect(array[0] instanceof Manager).toBe(tempArray[0] instanceof Manager);
});

test("checks if the filter() is filtering out the Engineer index", () => {
  let array = tempArray.filter(index => {
    return index instanceof Engineer;
  })
  expect(array[0] instanceof Engineer).toBe(tempArray[1] instanceof Engineer);
});

test("checks if the filter() is filtering out the Intern index", () => {
  let array = tempArray.filter(index => {
    return index instanceof Intern;
  });
  expect(array[0] instanceof Intern).toBe(tempArray[2] instanceof Intern);
});

