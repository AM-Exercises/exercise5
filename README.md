## Travel application

This proejct is a travel application. It is very JavaScript heavy, with clean HTML/CSS. I was targeting the DOM, working with objects, and retrieving data from 3 APIs. Finally, this is done in a Webpack environment, using an express server, wrapped up with service workers and tested with jest.

### Instructions

#### build-dev

1) Clone the project to your computer with git clone.
2) Cd the project on your computer.
3) Run "npm install"
4) Run "npm build-dev"

#### build-prod

1) If you didn't run build-dev, do 1-3 steps from above.
2) Run "npm build-prod"
3) Run "npm start"
4) Go to http://localhost:8081/

#### test

##### For testing the client side:

1) Go to src/client/js/formHandler.js and src/client/js/nameChecker.js on your favorite editor
and on the bottom of each file uncheck the bottom line and check the above line:

      //export { checkForName }

      //When running test - uncheck the bottom line and check the above line
       module.exports = checkForName;

 and save the files. 
 
2) run "npm run test"- 2 tests should pass.


##### For testing the server side:

1) Change back the lines from before and save the files.
2) Open a second terminal and cd the project.
3) On the first terminal run "npm run build-prod" and "npm start"
4) On the second terminal run "npm run test"
5) The server test should pass.






