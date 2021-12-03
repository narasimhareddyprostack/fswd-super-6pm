const Address = require("./Address");
class CC_Customer {
  constructor(id, name, email, address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
  }
}
let c1 = new CC_Customer(
  101,
  "Kiran",
  "kiran@gmail.com",
  new Address(96, "Raj Gandern", "Bangalore")
);
console.log(c1);
