let employees = [
  { id: 101, name: "Rahul Gandhi", sal: 45000 },
  { id: 102, name: "Priyanka Gandhi", sal: 55000 },
];

let createEmployee = (emp) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      employees.push(emp);
      let flag = true;
      flag ? resolve("Success.....") : reject("Enable to insert");
    }, 3000);
  });
};
let getEmployees = () => {
  setTimeout(() => {
    let rows = "";
    employees.forEach((employee) => {
      rows =
        rows +
        `<tr><td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.sal}</td></tr>`;
    });
    document.getElementById("abc").innerHTML = rows;
  }, 1000);
};

/* createEmployee({ id: 103, name: "sonia", sal: 4500887 })
  .then((success) => {
    console.log(success);
    getEmployees();
  })
  .catch((err) => {
    console.log(err);
  });
 */
let exeDummy = async () => {
  await createEmployee({ id: 103, name: "sonia", sal: 4500887 });
  getEmployees();
};
exeDummy();
