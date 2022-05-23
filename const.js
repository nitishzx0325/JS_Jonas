const obj = {
  name: "Nitish",
  lname: "Kumar",
  sayhi: function () {
    console.log(this.name + " " + this.lname + " say's Hii");
  },
};
console.log(obj);
obj.sayhi();
