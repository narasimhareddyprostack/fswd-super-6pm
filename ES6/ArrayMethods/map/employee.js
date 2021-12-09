let employees = [
  { name: "Rahil Ganhdi", sal: 45000 },
  { name: "Priyanka Ganhdi", sal: 55000 },
  { name: "Sonia Ganhdi", sal: 65000 },
];
/* employees.map((employee) => {
  console.log(employee.name.toLocaleUpperCase());
});
 */

employees.map(function (obj) {
  console.log(obj.name);
});
