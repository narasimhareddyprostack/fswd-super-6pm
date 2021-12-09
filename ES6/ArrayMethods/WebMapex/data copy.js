let employees = [
  { id: 101, name: "Rahil Ganhdi", sal: 45000 },
  { id: 102, name: "Priyanka Ganhdi", sal: 55000 },
  { id: 103, name: "Sonia Ganhdi", sal: 65000 },
  { id: 101, name: "Rahil Ganhdi", sal: 75000 },
  { id: 102, name: "Priyanka Ganhdi", sal: 15000 },
  { id: 103, name: "Sonia Ganhdi", sal: 15000 },
  { id: 101, name: "Rahil Ganhdi", sal: 45000 },
  { id: 102, name: "Priyanka Ganhdi", sal: 85000 },
  { id: 103, name: "Sonia Ganhdi", sal: 165000 },
  { id: 101, name: "Rahil Ganhdi", sal: 435000 },
  { id: 102, name: "Priyanka Ganhdi", sal: 555000 },
  { id: 103, name: "Sonia Ganhdi", sal: 655000 },
  { id: 101, name: "Rahil Ganhdi", sal: 454000 },
  { id: 102, name: "Priyanka Ganhdi", sal: 55000 },
  { id: 103, name: "Sonia Ganhdi", sal: 65000 },
];

function display() {
  console.log("Test");
  let rows = "";
  employees.forEach((employee) => {
    rows =
      rows +
      `<tr> <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.sal + 100}</td>
     </tr>`;
  });
  console.log(rows);
  document.getElementById("abc").innerHTML = rows;
}
