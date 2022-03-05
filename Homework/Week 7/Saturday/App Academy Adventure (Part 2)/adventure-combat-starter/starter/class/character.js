/*
* This class is the parent of Player and Enemy class
*/
class Character {

  /*
  * This is a constructor for Character that sets the name, description,
  * and currentRoom 
  * 
  * @param {string} name
  * @param {string} description
  * @param {string} currentRoom
  */
  constructor(name, description, currentRoom) {
    // Fill this in
    this.name = !name ? "name" : name;
    this.description = !description ? "description" : description;
    this.currentRoom = !currentRoom ? "currentRoom" : currentRoom;
  } // end constructor() method

  /*
  * This is a method for Character that apply damage to enemy/player
  * 
  * @param {number} amount
  * @return {nothing}
  */
  applyDamage(amount) {
    // Fill this in
  } // end applyDamage() method

  /*
  * This is a method for Character that determine whether the player/enemy is dead
  *
  * @param {nothing}
  * @return {nothing}
  */
  die() {
    // Fill this in
  } // end die() method

}

// export Character class
try {
  module.exports = {
    Character,
  };
} catch {
  module.exports = null;
}
