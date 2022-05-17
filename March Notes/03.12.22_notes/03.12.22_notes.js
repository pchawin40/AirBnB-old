class Birthday{
  constructor(year, month, day) {
    this.birthday = new Date(year, month - 1, day);
    this.obligationStart = 8;
    this.obligationEnd = 10;
    this.newObligation = [];
  }

  // Want to make a method that will check our current obligations 
  // if the new obligation time does not conflict we will add to the
  // this.obligation array
  addObligation(date) {
    // console.log(this);
    // console.log(date);
    // checking if the passed in time is within our hard coded obligation time 
    if (date.getHours() < this.obligationStart && date.getHours() > this.obligationEnd)
      throw new Error("Busy"); /// if the passed in date is within that time, we say busy by throwing an error
    
    // check if the current date is within our new obligations array
    if (this.newObligations.includes(date))
      // if passed in date is already in obligation, throw in error
      throw new Error("Busy");
    
    // check if passed in date is before birthday
    if (date.getDate() < this.birthday.getDate())
      throw new Error("Busy, before birthday"); // if it is, throw error as only want things on my birthday
    
    // check if passed in date is in future
    if (date.getDate() > this.birthday.getDate())
      // if it is in future, cannot schedule it
      throw new Error("Busy, after birthday");
    
    // if date passed all of check, schedule it
    this.newObligations.push(date);
  }

}

let myBirthday = new Birthday(1994, 04, 04);

let someObligation = new Date(1994, 04 - 1, 04, 7);

myBirthday.addObligation(someObligation);
// console.log(myBirthday.newObligations);

expect(myBirthday.newObligations).to.include(someObligation);

exports = Birthday;
