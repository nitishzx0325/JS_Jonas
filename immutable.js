// mutable code

const person1 = {
  name: "Nitish",
  Age: 25,
};
const person2 = person1;
person2.name = "steve";
console.log(person2);
console.log(person1);

//immutable code
const person3 = { ...person1 };
person3.name = "aman";
console.log(person3);
console.log(person1);

//another way
const person4 = Object.assign({}, person1);
person4.name = "Ritu";
console.log(person4);
console.log(person1);
