const chai = require("chai");
const expect = chai.expect;
const Birthday = require("../03.12.22_notes");

describe("Hurry", () => {
  it("Should this work??", () => {
    try {
      const birthday = new Birthday(1994, 04, 04);
      const someObligation = new Date(1994, 04 - 1, 04, 7);
      birthday.addObligation(someObligation);
      expect(birthday).to.not.throw(Error);
    } catch(e) {
      console.log(e);
      throw new Error("");
    }
    expect(true).to.be.true;
    expect(birthday.newObligations).to.include(someObligation);
  });
})
