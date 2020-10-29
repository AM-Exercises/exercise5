## Travel application

This proejct is a travel application. It is very JavaScript heavy, with clean and appealing HTML/CSS. It targets the DOM, works with objects, and retrieve data from 3 APIs. Finally, this is done in a Webpack environment, using an express server, wrapped up with service workers and tested with jest.

### Instructions

#### build-dev

1) Clone the project to your computer with git clone.
2) cd the project on your computer.
3) write "npm install"
4) write "npm build-dev"

#### build-prod

1) If you didn't run build-dev, do 1-3 steps from above.
2) write "npm build-prod"

#### test

##### For testing the client side:

1) go to src/client/js/formHandler.js and src/client/js/nameChecker.js
on the bottom of the files:

uncheck the bottom line and check the above line

2) write npm run test. 2 tests should pass.


##### For testing the server side:

1) Open a second terminal
2) On the first terminal write "npm run build-dev"
3) On the second terminal- cd the project and write "npm run test"
4) The server test should pass.






