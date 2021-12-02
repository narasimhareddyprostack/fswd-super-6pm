class Customer {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    console.log("Parent Class Constructor");
  }
}
class StandardCustomer extends Customer {
  constructor(a, b, c) {
    super(a, b);
    this.amount = c;
    console.log("Child Class - Constructor");
  }
}
let sc = new StandardCustomer(101, "Rahul Gandhi", 5000);
console.log(sc);
/* class PremiumCustomer extends Customer {}
 */
