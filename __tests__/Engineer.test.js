const Engineer = require('../lib/Engineer');

test('Creates an Engineer Object', () => {
  const engineer = new Engineer('Dave', '1', 'email', 'github');

  expect(engineer.name).toBe('Dave');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("Gets engineer's name", () => {
  const engineer = new Engineer('Dave', '1', 'email', 'github');

  expect(engineer.getName()).toBe('Dave');
});

test("Gets engineer's id", () => {
  const engineer = new Engineer('Dave', '1', 'email', 'github');

  expect(engineer.getId()).toBe('1');
});

test("Gets engineer's email", () => {
  const engineer = new Engineer('Dave', '1', 'email', 'github');

  expect(engineer.getEmail()).toBe('email');
});

test("Gets engineer's role should be engineer", () => {
  const engineer = new Engineer('Dave', '1', 'email', 'github');

  expect(engineer.getRole()).toBe('Engineer');
});

test("Gets engineer's github", () => {
  const engineer = new Engineer('Dave', '1', 'email', 'github');

  expect(engineer.getGithub()).toBe('github');
});

test("Checks to see if making the github username to lowercase works", () => {
  const engineer = new Engineer('Dave', '1', 'email', 'GitHub');

  expect(engineer.getGithub()).toBe('github');
  //github.toLowerCase() is now in the constructor
});