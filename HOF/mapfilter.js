//map
console.log("----------- Map--------------");
const myarr = [2, 4, 5, 6];
const arr = myarr.map(function (x) {
  return x * x;
});
console.log(myarr);
console.log("--------------------------new Arr-------------");
console.log(arr);

//filter
console.log("---------Filtered--------------");
const farr = myarr.filter(function (x) {
  return x % 2 === 0;
});
console.log(farr);

// reduce
console.log("--------------reduce-----------");
const rarr = myarr.reduce(function (accululator, x) {
  return accululator + x;
}, 0);
console.log(rarr);
