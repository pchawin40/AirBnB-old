// create a class called customer
class Customer{
  // constructor accepting name as parameter
  constructor(name) {
    this.name = !name ? "name" : name;
    // should have money and purchases attributes
    this.money = 0;
    this.purchases = [];
  } // end constructor

  // should allow customers to add and withdraw funds
  // method for customer to add money
  addFunds(money) {
  this.money += money;
  }

  // method for customer to withdraw funds
  withdrawFunds(money) {
    this.money -= money;
    
    // should not allow customers to withdraw more funds than they own
    if (this.money < 0) throw new Error();
  }

} // end class


// export customer
try {
  module.exports = Customer;
} catch {
  module.exports = null;
}
