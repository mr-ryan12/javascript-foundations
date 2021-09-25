class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.count = 0;
  }

  shootBow() {
    this.count++
    if (this.count === 3) {
      this.cranky = true;
    }
    if (this.cranky === true) {
      return 'NO!';
    } else if (this.layingDown === true) {
      return 'NO!';
    } else {
      return 'Twang!!!';
    }
  };

  run() {
    this.count++
    if (this.count === 3) {
      this.cranky = true;
    }
    if (this.cranky === true) {
      return 'NO!';
    } else if (this.layingDown === true) {
      return 'NO!';
    } else {
      return 'Clop clop clop clop!!!';
    }
  };

  sleep() {
    if (this.standing === true) {
      return 'NO!';
    } else if (this.layingDown === true) {
      this.cranky = false;
      return 'ZZZZ';
    }
  };

  layDown() {
    if (this.layingDown === false) {
      this.layingDown = true;
      this.standing = false;
    }
  };

  standUp() {
    if (this.standing === false) {
      this.standing = true;
      this.layingDown = false;
    }
  };

  drinkPotion() {
    if (this.cranky === true) {
      this.cranky = false;
    } else {
      this.cranky = true;
    }
    if (this.layingDown === true) {
      return 'Not while I\'m laying down!';
    }
  }
}

module.exports = Centaur;