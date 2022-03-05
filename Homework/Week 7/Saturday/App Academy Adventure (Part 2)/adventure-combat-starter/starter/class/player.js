const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      } // end for loop
    } // end if-else statement
  } // end printInventory() method

  takeItem(itemName) {

    // Fill this in
    const roomItem = this.currentRoom.getItemByName(itemName);
    if (roomItem) this.items.push(roomItem);
  } // end takeItem() method

  dropItem(itemName) {

    // Fill this in
    // Drop an item the player is holding into the current room
    const playerItem = this.getItemByName(itemName);
    if (playerItem) {
      // add the player's item into the current room list of items
      this.currentRoom.items.push(playerItem);

      // create index variable to remove item from the player's inventory
      let index = this.items.findIndex(currItem => currItem.name === playerItem.name);
      this.items.splice(index, 1);
    } // end if statement
  } // end dropItem() method

  eatItem(itemName) {

    // Fill this in
    // get player food
    const playerFood = this.getItemByName(itemName);
    
    // if player food exists and is an instance of Food
    if (playerFood && playerFood instanceof Food) {
      // find index of items and remove it from player's inventory
      let index = this.items.findIndex(currItem => currItem.name === playerFood.name);
      this.items.splice(index, 1);
    } // end if statement
  } // end eatItem() method

  getItemByName(name) {

    // Fill this in
    // for all items in player's inventory, check to see if any of the inventory is found with the given name
    this.items.map(currItem => currItem === name ? currItem : "");
    for (let itemIndex = 0; itemIndex < this.name.length; itemIndex++){
      let currItem = this.items[itemIndex];
      if (currItemItem.name === name) return currItem;
    } // end for loop
  } // end getItemByName() method

  hit(name) {

    // Fill this in

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
