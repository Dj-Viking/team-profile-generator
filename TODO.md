 * (`__tests__`) folder
  - test files as follows
      * DONE Employee.test.js
      * DONE Engineer.test.js
      * DONE Intern.test.js
      * DONE Manager.test.js
* dist folder                            
  - rendered output (HTML) 
  - and CSS style sheet
* lib/                
  - classes
    * Employee parent class will the following properties
      - DONE <code>name</code> 
      - DONE <code>id</code> 
      - DONE <code>email</code> 
      - DONE <code>getName()</code> | get value of name 
      - DONE <code>getId()</code> | get value of id
      - DONE <code>getEmail()</code> | get value of email
      - DONE <code>getRole()</code> | each employee's have unique roles defined in their class
    * Overriden <code>getRole()</code> functions will just but declared again with new return values instead of inherited 'Employee'
  - The three employee classes will extend Employee super constructor
    * Manager will have unique properties
      - DONE <code>officeNumber</code>
      - DONE <code>getRole()</code> | this will override to return Manager by default
    * Engineer will have unique properties
      - DONE <code>github</code> | their github username 
      - DONE <code>getGithub()</code> | get the value of github
      - DONE <code>getRole()</code> | this will override to return Engineer by default
    * Intern will have unique properties
      - DONE <code>school</code> | from which they are from
      - DONE <code>getSchool()</code> | get the value of school
      - DONE <code>getRole()</code> | this will override to return Intern by default
* src/                
  - template helper code
    * Functions that will take object data and place into the HTML text areas that will need these elements generated
    * Function that will take the template data and write the file to the dist folder.
* Index.js            
  - runs the application


## Main Focus
  * Generally this should loop forever if someone keeps adding info for employees, interns, or managers one by one in inquirer until they are done. Should have an option that allows them to continue or quit.

* Acceptance Criteria 

  - DONE GIVEN a command-line application that accepts user input
  - DONE WHEN I am prompted for my team members and their information
  - DONE THEN an HTML file is generated that displays a nicely formatted team roster based on user input
  - DONE WHEN I click on an email address in the HTML
  - DONE THEN my default email program opens and populates the TO field of the email with the address
  - DONE WHEN I click on the GitHub username
  - DONE THEN that GitHub profile opens in a new tab
  - DONE WHEN I start the application
  - DONE THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
  - DONE WHEN I enter the team manager’s name, employee ID, email address, and office number
  - DONE THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
  - DONE WHEN I select the engineer option
  - DONE THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
  - DONE WHEN I select the intern option
  - DONE THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
  - DONE WHEN I decide to finish building my team
  - DONE THEN I exit the application, and the HTML is generated