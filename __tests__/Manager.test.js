const Manager = require('../lib/Manager');

test("Creates a Manager Object", () => {
  const manager = new Manager('Don', '1', 'email', '123-456-7890');

  expect(manager.name).toBe('Don');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNum).toBe('123-456-7890');
});

test("Get's manager's name", () => {
  const manager = new Manager('Don', '1', 'email', '123-456-7890');

  expect(manager.getName()).toBe('Don');
});

test("Get manager's id", () => {
  const manager = new Manager('Don', '1', 'email', '123-456-7890');

  expect(manager.getId()).toBe('1');
});

test("Get manager's email", () => {
  const manager = new Manager('Don', '1', 'email', '123-456-7890');

  expect(manager.getEmail()).toBe('email');
});

test("Get manager's office number", () => {
  const manager = new Manager('Don', '1', 'email', '123-456-7890');

  expect(manager.getOfficeNum()).toBe('123-456-7890');
})

