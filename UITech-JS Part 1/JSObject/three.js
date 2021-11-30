let emp = {
  sal: 45000,
  getOrder: function () {
    console.log("Inside getOrder function");
    return false;
  },
};

console.log(emp.sal);
console.log(emp.getOrder());
console.log(emp.name);
console.log(emp.getName());//
