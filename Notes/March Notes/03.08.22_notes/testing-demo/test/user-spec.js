// mocha (test framework) allow for test running and present them in organized user friendly way
// chai (assertion library) performs the actual test comparison
const { expect } = require("chai");
const User = require("../class/user");

// set up a test for basic functionaly of the User class
// describe: group of tests 
describe('User class', function () {

  
  // check if a user can be created successfully by creating new user
  let user;

  this.beforeEach(() => {
    user = new User("john_doe");
  });

  // it: tests a single spec
  it('should create successfully', function () {
    // assert that checks to see if the new user exists
    expect(user).to.exist;
  }); 

  // all users should require a username upon creation
  it("should set username on creation", function () {
    expect(user.username).to.equal("john_doe");
  });
});

// note:
// describe and it comes from mocha (test framework)
// expect comes from chai
