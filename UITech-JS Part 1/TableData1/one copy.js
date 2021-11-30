let employees = [
  { id: 101, name: "Rahul Gandhi", sal: 35000 },
  { id: 102, name: "Priya", sal: 35000 },
  { id: 103, name: "Soni", sal: 35000 },
];

function fun1() {
  let sum = "";
  for (let i = 0; i <= employees.length - 1; i++) {
    sum =
      sum +
      `<tr> 
                    <td> ${employees[i].id}</td>
                    <td> ${employees[i].name}</td>
                    <td> ${employees[i].sal}</td>              
                </tr>`;
  }
  console.log(sum);
  document.getElementById("abc").innerHTML = sum;
}

/*
function fun1() {
   //let ref = document.getElementById("abc");
   //console.log(ref); 
  document.getElementById("abc").innerHTML = "Dummmy Table Data";
}
*/
