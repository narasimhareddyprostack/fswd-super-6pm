let e_names = ["Ajay", "Kiran", "Girish"];
//iterate using for loop
for (let i = 0; i <= e_names.length - 1; i++) {
  console.log(e_names[i]);
}
console.log("******************");
//iterate using while loop
let i = 0;
while (i <= e_names.length - 1) {
  console.log(e_names[i]);
  i++;
}

console.log("******************");
//iterate using do{} while() loop
var a = 0;
do {
  console.log(e_names[a]);
  a++;
} while (a <= e_names.length - 1);
