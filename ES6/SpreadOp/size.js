let size = [38, 40, 42, 44];
//create new array based on existing array
/* 
let kiran = [...size];
console.log(size);
console.log(kiran); */
let new_Size = [];
for (s of size) {
  new_Size.push(s);
}
console.log(new_Size);
