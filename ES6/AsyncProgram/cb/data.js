let employees = [
  { id: 101, name: "Rahul Gandhi", sal: 45000 },
  { id: 102, name: "Priyanka Gandhi", sal: 55000 },
];

let createEmployee = (emp, callback) => {
  setTimeout(() => {
    employees.push(emp);
    callback();
  }, 3000);
};

let getEmployee = () => {
  setTimeout(() => {
    let rows = "";
    employees.forEach((employee) => {
      rows =
        rows +
        `<tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.sal}</td>
        </tr>`;
    });
    document.getElementById("abc").innerHTML = rows;
  }, 1000);
};

createEmployee({ id: 103, name: "Sonia Gandhi", sal: 65000 }, getEmployee);
