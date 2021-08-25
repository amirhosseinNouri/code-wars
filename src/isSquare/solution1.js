const isSquare = function (n) {
  if (n === 0) {
    return true;
  }
  return n > 0 && isNaturalNumber(Math.sqrt(n));
};

const isNaturalNumber = (n) => n % 1 === 0;
