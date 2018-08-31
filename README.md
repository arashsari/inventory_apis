# NodeJs APIs (movie)
This repo contains nodeJs restfull apis (movies apis - GET/DELETE/POST) and uses [swagger](https://github.com/theganyo/swagger-node-runner) you can find custom validation and security handlers implemented by swagger in the fittings folder.
You can find es6/es7 coding style in this project.

## Documentation
OpenApi 2.0 (swagger). - validation and security
## Transpile
Babel transpiles es6/es7 code (e.g import, await, async, object destruction and etc) into node v8.
## Quality Coding
Eslint is integrated.
## Testing
Jest is used, code coverage is out of the box using Jest.
## Code Coverage Report
Jest provide code coverage, after running the "npm run coverage", to see the coverage on html please refer to coverage/icov-report/index.html.
## Postman
A collection of postman requests are provided in the root.

************

### To Run
1. git clone the project.
2. run "npm install". 
3. run "npm start".
4. the server should be hosted on port 3000.

### To Test
1. run "npm test" - it lints the project and then runs the tests using jest.

### To Lint
1. run "npm run lint" - eslint integrated.

### To Debug
1. open vsCode.
2. select launch from debug list.
3. press f5.

### To Debug Unit Tests
1. open vsCode.
2. select JEST* from debug list.
3. press f5.

### To Test By Postman
1. Movies.postman_collection.json should be imported to postman.
2. run requests.

### To Check Code Covergae
1. run "npm run coverage'.
2. you see a report in command line.
3. to see the coverage on html please refer to coverage/icov-report/index.html.