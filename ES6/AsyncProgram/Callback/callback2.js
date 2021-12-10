let calcualte = (a, b, operation) => {
  if (operation == "sum") {
    return a + b;
  }
  if (operation == "multi") {
    return a * b;
  }
};
let r1 = calcualte(10, 20, "sum");
console.log(r1);
let r2 = calcualte(10, 20, "multi");
console.log(r2);
