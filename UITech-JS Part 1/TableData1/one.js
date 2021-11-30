let students = [
  { id: 101, name: "Rahul Gandhi", sal: 35000 },
  { id: 102, name: "Priya", sal: 35000 },
  { id: 103, name: "Soni", sal: 35000 },
];

function fun1() {
  let rows = "";
  for (student of students) {
    rows =
      rows +
      `<tr><td>${student.id}</td><td>${student.name}</td><td>${student.sal}</td></tr>`;
  }
  document.getElementById("abc").innerHTML = rows;
}
