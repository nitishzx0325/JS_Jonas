'use strict';
const bookings = [];
const createbooking = function (flightNum, numPassanger = 1, price = 199) {
  // ES5
  //   numPassanger = numPassanger || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassanger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createbooking('lh123');
createbooking('lh2w2', 2, 800);
