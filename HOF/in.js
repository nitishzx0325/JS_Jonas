const arr = ["a", "b", "c", "d"];
const obj = {
  name: "Nitish",
  wife: "undefined",
  son: "balaba",
};
console.log(obj.wife);
console.log("wife" in obj); //true
// print key
for (key in obj) {
  console.log(key);
}
console.log("-----------val");
for (key of arr) {
  console.log(key);
}

let fl = [1, 2, 3, 4, [98, 12, 34, 355, [39084, 1872, 97612]]];
console.log(fl.flat(Infinity));
const user = {
  name: "Nitish",
};
user.name = "Help";
console.log(user);
