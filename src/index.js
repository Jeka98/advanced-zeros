module.exports = function getZerosCount(number, base) {
  // your implementation
  let counter,
      zerosCounter = number;

  for (let i = 2; i <= base; i++) {
    counter = 0;
    while (base % i ==0) {
      counter++;
      base = Math.floor(base / i);
    }

    let zerosNumb = 0;
        numb = number;

    while (Math.floor(numb / i) > 0) {
      zerosNumb += Math.floor(numb / i);
      numb = Math.floor(numb / i);
    }
    zerosCounter = Math.min(zerosCounter, Math.floor(zerosNumb / counter));
  }

  return zerosCounter;
}