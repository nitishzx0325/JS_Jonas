'use strict';
// const bookings = [];
// const createbooking = function (flightNum, numPassanger = 1, price = 199) {
//   // ES5
//   //   numPassanger = numPassanger || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassanger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createbooking('lh123');
// createbooking('lh2w2', 2, 800);

const flight = 'LH123';
const jonas = {
  name: 'Jonas',

  passport: 121214332,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 121214332) {
    alert('checked In');
  } else {
    alert('wrong passport');
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
