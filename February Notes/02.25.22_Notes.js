// Node vs Browser

// Node:
// - Has "global" object named "global"
// - Has specific objects like "process"
// - Has "require" function to import another .js file
// - Access to node modules like "readline"

// Browser:
// - Has "global" object named "window"
// - Browser specific objects like "location" and "document"
// - Does not have "require" function
// - No access to node module

(function() {
  console.log(this);
})();
