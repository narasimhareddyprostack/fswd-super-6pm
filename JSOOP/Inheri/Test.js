class Parent {}
class Child extends Parent {
  constructor(name, surname) {
    super();
    this.name = name;
    this.surname = surname;
    console.log("Child Class - Constructor");
  }
}
let c1 = new Child("Rahul", "Gandhi");
console.log(c1);
