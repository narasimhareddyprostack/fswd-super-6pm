class Central {
  tax = 18;
}
class KA extends Central {
  tax = 28;
}
let ka_Obj = new KA();
console.log(ka_Obj.tax);

class GOA extends Central {
  tax = 16;
}
let goa_Obj = new GOA();
console.log(goa_Obj.tax);

class TN extends Central {}
let tn_Obj = new TN();

console.log(tn_Obj.tax);
