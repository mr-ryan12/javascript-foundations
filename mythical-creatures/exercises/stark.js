var Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(stark) {
    if (stark) {
      this.name = stark.name;
    };
    if (stark) {
      this.location = stark.area || 'Winterfell';
    };
    this.safe = false;
  };

  sayHouseWords() {
    if (this.safe === true) {
      return 'The North Remembers';
    } else {
      return 'Winter is Coming'
    };
  };

  callDirewolf(wolf) {
    var direwolf = new Direwolf(wolf, this.location);
    direwolf.starksToProtect.push(this);
    this.safe = true;
    return direwolf;
  };
};

module.exports = Stark;