 * (__tests__) folder
  - test files as follows
      * Employee.test.js
      * Engineer.test.js
      * Intern.test.js
      * Manager.test.js
* dist folder                            
  - rendered output (HTML) 
  - and CSS style sheet
* lib/                
  - classes
    * Employee parent class will the following properties
      - <code>name</code>
      - <code>id</code>
      - <code>email</code>
      - <code>getName()</code> | get value of name
      - <code>getId()</code> | get value of id
      - <code>getEmail()</code> | get value of email
      - <code>getRole()</code> | each employee's have unique roles defined in their class
  - The three employee classes will extend Employee super constructor
    * Manager will have unique properties
      - <code>officeNumber</code>
      - <code>getRole()</code> | this will override to return Manager by default
    * Employee will have unique properties
      - <code>github</code> | their github username 
      - <code>getGithub()</code> | get the value of github
      - <code>getRole()</code> | this will override to return Engineer by default
    * Intern will have unique properties
      - <code>school</code> | from which they are from
      - <code>getSchool()</code> | get the value of school
      - <code>getRole()</code> | this will override to return Intern by default
* src/                
  - template helper code
    * Functions that will take object data and place into the HTML text areas that will need these elements generated
    * Also functions that will generate the CSS class names for creating the card classes and all styling
* Index.js            
  - runs the application