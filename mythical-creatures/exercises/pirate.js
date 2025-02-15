class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.booty = 0;
    if (this.job === undefined) {
      this.job = 'scallywag';
    };
  };

  robShip() {
    if (this.booty === 500) {
      this.booty = this.booty;
      this.cursed = true;
      return 'ARG! I\'ve been cursed!';
    } else {
      this.booty += 100;
      return 'YAARRR!';
    }
  };

  liftCurse() {
    if (this.cursed === false) {
      return 'You don\'t need to lift a curse!';
    } else {
      this.booty -= 300;
      this.cursed = false;
      return 'Your curse has been lifted!';
    };
  };
};

module.exports = Pirate;
