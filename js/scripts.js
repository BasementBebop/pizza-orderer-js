var Pizza = {
  size: 0,
  topping: "",
  sliceArea: 15,
  findSlices: function() {
    var area = 3.14159 * ((this.size / 2) * (this.size / 2));
    return parseInt(area / this.sliceArea);
  }
};
