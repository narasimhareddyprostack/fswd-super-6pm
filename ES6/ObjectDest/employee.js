let emp = {
  name: "Rahul Gandhi",
  sal: 45000,
  profile: { color: "red", height: "6feet" },
  loc: "New Delhi",
}; // Object
//read object properties
console.log(emp.name);
console.log(emp.sal);
console.log(emp.profile.color);
//read Object properties as variables

let { name, loc, profile } = emp; // Object Destructuring
let { color } = profile;
console.log(name);
console.log(loc);
console.log(color);
