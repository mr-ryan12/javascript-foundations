class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  };

  receiveBelief() {
    this.dust++;
  };

  believe() {
    this.dust += 10;
  };

  makeDresses(moreDresses) {
    for (var i = 0; i < moreDresses.length; i++) {
      this.clothes.dresses.push(moreDresses[i]);
    };
  };

  becomeProvoked() {
    this.disposition = 'Vengeful';
  };

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
    } else {
      return infant;
    };
    
    if (this.humanWards.length === 3) {
      this.disposition = 'Good natured';
    };
  };
};

module.exports = Fairy;