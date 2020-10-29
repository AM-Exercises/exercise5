## Travel application

This proejct is a travel application. It is very JavaScript heavy, with clean HTML/CSS. I was targeting the DOM, working with objects, and retrieving data from 3 APIs. Finally, this is done in a Webpack environment, using an express server, wrapped up with service workers and tested with jest.

### Instructions

#### build-dev

1) Clone the project to your computer with git clone.
2) Cd the project on your computer.
3) Write "npm install"
4) Write "npm build-dev"

#### build-prod

1) If you didn't run build-dev, do 1-3 steps from above.
2) Write "npm build-prod"
3) Write "npm start"
4) Go to http://localhost:8081/

#### test

##### For testing the client side:

1) Go to src/client/js/formHandler.js and src/client/js/nameChecker.js on your favorite editor
and on the bottom of each file uncheck the bottom line and check the above line:

      //export { checkForName }

      //When running test - uncheck the bottom line and check the above line
       module.exports = checkForName;

 (This is just for testing the client side. If you want to run build-dev or build-prod, change the lines back).

2) Write "npm run test"- 2 tests should pass.


##### For testing the server side:

1) Change back the lines from before.
2) Open a second terminal
3) On the first terminal write "npm run build-prod" following "npm start"
4) On the second terminal- cd the project and write "npm run test"
5) The server test should pass.






