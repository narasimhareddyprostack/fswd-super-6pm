class Employee {
  emp_Id = 101;
  emp_Name = "Rahul Gandhi";
  getEmployee_Details() {
    console.log(
      " Employee Id:" + this.emp_Id + "Employee Name:" + this.emp_Name
    );
  }
}

let e1 = new Employee();
let e2 = new Employee();
e1.getEmployee_Details();
e2.getEmployee_Details();
