

const Employee = require('../lib/Employee');


test('Creates an Employee object', () => {
  const employee = new Employee('Dave', '1', 'asdfasf');

  expect(employee.name).toBe('Dave')

  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("Get employee's name", () => {
  const employee = new Employee('Dave', '1', 'asdfasf');

  expect(employee.getName()).toBe('Dave');
});

test("Get employee's id", () => {
  const employee = new Employee('Dave', '1', 'asdfasf');

  expect(employee.getId()).toBe('1');
});

test("Get employee's email", () => {
  const employee = new Employee('Dave', '1', 'asdfasf');

  expect(employee.getEmail()).toBe('asdfasf');
});

test("Get employee's role", () => {
  const employee = new Employee('Dave', '1', 'asdfasf');

  expect(employee.getRole()).toBe('Employee');
})


