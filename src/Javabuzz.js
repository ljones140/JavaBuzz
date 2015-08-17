var Javabuzz = function(){};

Javabuzz.prototype._isDivisableBy = function(number, divisor) {
  return (number % divisor === 0);
};


Javabuzz.prototype.isDivisableByThree = function(number) {
  return this._isDivisableBy(number, 3);
};

Javabuzz.prototype.isDivisableByFive = function(number) {
  return this._isDivisableBy(number, 5);
};

Javabuzz.prototype.isDivisableByFifteen = function(number) {
  return this._isDivisableBy(number, 15);
};

Javabuzz.prototype.says = function(number) {
  if (this.isDivisableByFifteen(number)) {
    return "JavaBuzz";
  }
  if (this.isDivisableByThree(number)) {
    return "Java";
  }
  if (this.isDivisableByFive(number)) {
    return "Buzz";
  }
  return number;
};