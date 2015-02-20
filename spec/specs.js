describe("Pizza", function() {
  describe("findSlices", function() {
    it("calculates the amount of slices for the pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 14;
      expect(testPizza.findSlices()).to.equal(10);
    });
  });
});
