class Craft {
  constructor(craftObject) {
    this.name = craftObject.type;
    this.materials = craftObject.materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = true;
    return 'All done! It looks great!';
  }

  calculateProjectTotal() {
    var canvasPrice = this.materials[0].num1 * this.materials[0].num2;
    var paintPrice = this.materials[1].num1 * this.materials[1].num2;
    var total = canvasPrice + paintPrice;

    return total;
  }
}

module.exports = Craft;
