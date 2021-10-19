class Material {
  constructor(name, price, amount, units) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units;
  }

  useMaterial(amount) {
    this.amount -= amount;
    if (this.amount <= 0) {
      return `You don't have enough ${this.name}! Try using ${this.amount + amount} ${this.units} or less.`
    }
    
    return `You now have ${this.amount} ${this.units} of ${this.name} left.`;
  }

  calculateMaterialCost() {
    var totalCost = this.price * this.amount;

    return totalCost;
  }
}


module.exports = Material;
