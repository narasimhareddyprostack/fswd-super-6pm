//let emp = {};
//-group of key:values pairs as one entity
//console.log(typeof emp); //Object
let emp = { name: "Ravi", sal: 4500 };
console.log(emp);

//reading object properties
console.log(emp.name);
console.log(emp.sal);
console.log(emp.email);
emp.email = "ravi@tcs.com";
emp.sal = 75000;
console.log(emp);
console.log("****Delete operation***");
delete emp.sal;
delete emp.name;
delete emp.email;
delete emp;
//remove emp;
console.log(emp);
