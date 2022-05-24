let fs = require("fs");
let promise = fs.promises.readFile("f1.txt");
// console.log(fs);
console.log(promise);
promise.then(function (data) {
  console.log("fulfilled promises ", data + "");
});
promise.catch(function (err) {
  console.log("err ", err);
});
