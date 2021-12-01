class Central {
  tax = 18;
  getTaxDetails() {
    console.log("Central Govt class");
  }
}
class KA extends Central {
  tax = 20;
  getTaxDetails() {
    console.log("KA Govt class");
  }
}

let obj = new KA();
console.log(obj.tax); // 20
console.log(obj.getTaxDetails());
