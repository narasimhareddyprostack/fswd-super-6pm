class Employee {
  emp_Id;
  emp_Name;
  constructor(a, b) {
    this.emp_Id = a;
    this.emp_Name = b;
    console.log("Executing Automatically");
  }
}
let obj1 = new Employee(101, "Rahul Gandhi");
let obj2 = new Employee(102, "Priyanka Gandhi");
console.log(obj1);

console.log(obj2);
