let sum = (kiran, bhanu) => {
  console.log(kiran + bhanu);
};

let calucate = (a, b, callback) => {
  callback(a, b);
};
calucate(10, 20, sum);
//passing one function as argugment
//passing number as argument
