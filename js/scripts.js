var Pizza = {
  size: 0,
  topping: "",
  sliceArea: 15,
  findSlices: function() {
    var area = 3.14159 * ((this.size / 2) * (this.size / 2));
    return parseInt(area / this.sliceArea);
  }
};

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var newSize = parseInt($("input#size").val());
    var newTopping = $("[name=topping]:checked").val();
    var newSliceArea = parseInt($("input#slice-area").val());
    var newPizza = Object.create(Pizza);
    newPizza.size = newSize;
    newPizza.topping = newTopping;
    newPizza.sliceArea = newSliceArea;

    $(".order").append("<li>" + newPizza.size + " inch " + newPizza.topping + " pizza containing " + newPizza.findSlices() + " slices</li>");
    $(".order").show("slow");

  });
});
