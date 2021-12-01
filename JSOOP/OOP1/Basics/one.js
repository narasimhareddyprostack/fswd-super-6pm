class Product {
  product_Id = 101;
  product_Name = "Iphone 12";
  getDetails() {
    console.log("Product Details");
  }
}
let p1 = new Product(); //ref Object
let p2 = new Product(); //ref Object
//console.log(typeof p1);
console.log(p1);
console.log(p2);
p1.getDetails();
p2.getDetails();
console.log(p1.product_Name);
