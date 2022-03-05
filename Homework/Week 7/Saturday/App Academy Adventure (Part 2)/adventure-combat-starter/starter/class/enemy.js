const {Character} = require('./character');

const { Player } = require("./player");

/*
* This class perform actions on a cooldown timer and inherits from Character class
*/
class Enemy extends Character {
  /*
  * This is a constructor for Enemy 
  * 
  * @param {string} name
  * @param {string} description
  * @param {string} currentRoom
  */
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom);
  } // end constructor

  /*
  * This method for Enemy set the player to target
  *
  * @param {class instance} player
  * @return nothing
  */
  setPlayer(player) {
    this.player = player;
  } // end setPlayer() method

  /*
  * This method for Enemy get a random move from the Enemy
  *
  * @param {nothing}
  * @return {nothing}
  */
  randomMove() {
    // Fill this in
    // create a number
    let randomMoveNumber = Math.floor(Math.random() * 6);

    // from random move number, invoke one of the method randomly
    switch (randomMoveNumber) {
      case 1: this.takeSandwich();
      case 2: this.rest();
      case 3: this.attack();
      case 4: this.act();
      case 5: this.scratchNose();
    }
  }

  takeSandwich() {
    // Fill this in
    // if sandwich exists,
    // make player drop it from their inventory
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
  }

  applyDamage(amount) {
    // Fill this in
  }


  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

// export enemy 
try {
  module.exports = {
    Enemy,
  };
} catch {
  module.exports = null;
}
