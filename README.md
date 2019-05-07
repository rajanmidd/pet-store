# Pet-store
A Pet Store application with Node.js(ES6), Express framework, Mocha/chai(Test Case integration)

## How to Install

1.  Clone the repo
2.  Run "npm install command" to install add the dependencies.
3.  Run "npm start" command to start the NodeJS server.
4.  After starting server , you can visit `http://localhost:1005/api-docs/` to check the apis.

## How to Run Tests (Explicity from cli)

- You can run test cases by this command "npm test"
- It will show you how many test cases are passed or failed.

## API details

1.) ApI Name :- /owners (GET)
    This api is used to fetch all owners.
    
2.) API name:- /owners/1 (GET)
    This api is used to get the single owner information with their pet.
    
3.) Api Name :- /addPet (POST)
    This api is used to add a new pet in the json file.

4.) Api Name :- /pets/1 (GET)
    This api is used to get a single pet information with their owner.    
    
    
## App Structure

**./test**

- this folder contains integration tests [Mocha]

**./**

- `controllers` are route handlers that have `request` and `response` parameters.
- `routes` are RESTful route declarations using [express server module]
- `datastore` contains the json file
- `index.js` is the entrypoint that actually starts the Express server

## Code style ##
- Using eslint for code style
- Using NodeJS witj ES6.
- Using Mocha/chai for test case integration.

## Assumptions ##
- Authentication is not needed.
- Config is not needed as its a small application and doesnt contains database.
- I havent put much comments in the code as its readable itself.
- Only integration tests are available in this repository.

