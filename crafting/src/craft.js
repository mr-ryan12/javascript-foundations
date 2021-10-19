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
    var canvasPrice = this.materials[0].price * this.materials[0].amount;
    var paintPrice = this.materials[1].price * this.materials[1].amount;
    var total = canvasPrice + paintPrice;

    return total;
  }
}

module.exports = Craft;
