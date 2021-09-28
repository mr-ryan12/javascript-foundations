class Hobbit {
  constructor(hobbit) {
    this.name = hobbit.name;
    this.age = 0;
    this.old = false;
    this.hasRing = true;
  }

  celebrateBirthday() {
    this.age++;
    if (this.age <= 32) {
      this.adult = false;
    } else if (this.age >= 33) {
      this.adult = true;
    } else if (this.age >= 101) {
      this.adult = true;
    };
    if (this.age >= 101) {
        this.old = true;
    };
  }

  getRing() {
    if (this.name === 'Frodo') {
      this.hasRing = true;
      return 'Here is the ring!';
    } else {
      this.hasRing = false;
      return 'You can\'t have it!';
    }
  }
}

module.exports = Hobbit;