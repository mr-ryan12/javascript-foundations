class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    if (color === undefined) {
      this.color = 'white';
    }
  }

  isWhite() {
    if (this.color != 'white') {
      return false;
    }
  }

  says(string) {
    return `**;* ${string} *;**`;
  }
}

module.exports = Unicorn;
