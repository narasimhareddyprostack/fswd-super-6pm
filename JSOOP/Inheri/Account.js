class Account {
  min_Bal = 500;
  get_Account_Details() {
    console.log("Displaying Account Details");
  }
  get_Account_Balance() {
    console.log("your Account Balance:", this.min_Bal);
  }
}
class Savings_Account extends Account {}
class Current_Account extends Account {
  min_Bal = 5000;
}
let sa = new Savings_Account();
let ca = new Current_Account();
/* console.log(sa);
console.log(ca); */
sa.get_Account_Details();
sa.get_Account_Balance();
ca.get_Account_Details();
ca.get_Account_Balance();
