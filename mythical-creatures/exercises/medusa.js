var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  };

  gazeAtVictim(victim) {
    var statue = new Statue(victim.name);
    this.statues.push(statue);
    if (this.statues.length > 3) {
      var person = this.statues.splice(0, 1);
      var freedStatue = new Person(person[0].name);
      freedStatue.mood = 'relieved';
      return freedStatue;
    };
  };
};

module.exports = Medusa;