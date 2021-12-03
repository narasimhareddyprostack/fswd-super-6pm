class Address {
  constructor(house_No, area, city) {
    this.house_No = house_No;
    this.area = area;
    this.city = city;
  }
}
class Bank_Customer {
  constructor(id, name, email, address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
  }
}
let c1 = new Bank_Customer(
  101,
  "Kiran",
  "kiran@gmail.com",
  new Address(96, "Raj Gandern", "Bangalore")
);
console.log(c1);
class CC_Customer {}
