'use strict'


function calculateEngravingPrice(string, pricePerWord) {
  let total = 0;
  const words = string.split(" ");

  for (const word of words) {
    total += pricePerWord;
  }
  return total;
}

const message = "Proin sociis natoque et magnis parturient montes mus";
const price = calculateEngravingPrice(message, 10);

console.log(price);