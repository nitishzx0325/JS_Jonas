const obj = {
  name: "Nitish",
  lname: "Kumar",
  sayhi: function () {
    console.log(this.name + " " + this.lname + " say's Hii");
  },
};
console.log(obj);
obj.sayhi();
// array
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.myProp = "Hello";
arr.print = function () {
  console.log("I am array function");
};
