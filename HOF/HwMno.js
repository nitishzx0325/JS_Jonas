let arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = obj[arr[i]] == undefined ? 1 : obj[arr[i]] + 1;
}
console.log(obj);
