describe ("Javabuzz",function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe("knows when a number is", function() {

    it("divisable by 3", function() {
      expect(javabuzz.isDivisableByThree(3)).toBe(true);
    });

    it("divisable by 3", function() {
      expect(javabuzz.isDivisableByFive(5)).toBe(true);
    });

    it("divisable by 3", function() {
      expect(javabuzz.isDivisableByFifteen(15)).toBe(true);
    });

  });

  describe("knows when a numner is NOT", function() {

    it("divisable by 3", function() {
      expect(javabuzz.isDivisableByThree(1)).toBe(false);
    });

    it("divisable by 5", function() {
      expect(javabuzz.isDivisableByFive(2)).toBe(false);
    });

    it("divisable by 15", function() {
      expect(javabuzz.isDivisableByFifteen(4)).toBe(false);
    });

  });

  describe("when playing, says", function() {

    it('"Java" when a number is divisable by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });

    it('"Buzz" when a number is divisable by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('"JavaBuzz" when a number is divisable by 15', function() {
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });

  });

  describe("when playing, says number", function() {

    it('not "Java" when a number is not divisable by 3', function() {
      expect(javabuzz.says(1)).toEqual(1);
    });

    it('not "Buzz" when a number is not divisable by 5', function() {
      expect(javabuzz.says(2)).toEqual(2);
    });

    it('not "JavaBuzz" when a number is not divisable by 15', function() {
      expect(javabuzz.says(1)).toEqual(1);
    });

  });


});

