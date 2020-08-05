const Intern = require('../lib/Intern');

test("Creates Intern Object", () => {
  const intern = new Intern('Sam', '1', 'email', 'school'); 

  expect(intern.name).toBe('Sam');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test("Gets Intern's school", () => {
  const intern = new Intern('Sam', '1', 'email', 'school'); 

  expect(intern.getSchool()).toBe('school');
});

test("Get's Intern's Role", () => {
  const intern = new Intern('Sam', '1', 'email', 'school'); 

  expect(intern.getRole()).toBe('Intern');
})