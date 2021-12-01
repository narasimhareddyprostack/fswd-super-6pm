class Account {
  min_Bal = 500;
}
class Saving_Account extends Account {}
class Current_Account extends Account {
  min_Bal = 0;
}
let sa1 = new Saving_Account();
let ca1 = new Current_Account();
console.log(sa1);
console.log(ca1);
