// non parameterise
function fun() {
  console.log('Non parametrise ');
}
fun();
function fun(pp) {
  console.log(' parametrise ', pp);
}
fun(121);
console.log('----------------------------');
fun('aslkd');
console.log('-------------------------------');
fun([12233, 12, 12323, 4323]);
fun({ name: 'Nitish' });
// IIFE
(function ff() {
  console.log('I am IIFE');
  console.log('I will run automaticaly');
})();

function pass() {
  console.log('******************************************');
  console.log('I habe to pass');
}
function give(pass) {
  console.log('Function which has been passed ', pass);
}
give(pass);
function outer() {
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  return function inner() {
    console.log('I am inner');
  };
}
let v = outer();
console.log(v);
v();
