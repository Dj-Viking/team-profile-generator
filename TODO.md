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


## Main Focus
  * Generally this should loop forever if someone keeps adding info for employees, interns, or managers one by one in inquirer until they are done. Should have an option that allows them to continue or quit.

  Acceptance Criteria 

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated