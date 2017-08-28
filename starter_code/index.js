// import the elevator and the person file
const Elevator  = require('./elevator.js');
const Person    = require('./person.js');

//create our elevator
const myElevator = new Elevator();

// start the elevator automatic movement
myElevator.start();

// For iteration 2; call "floorUp()" and "floorDown"

// myElevator.floorUp();
myElevator.floorUp();

// myElevator.floorDown();

// stop the elevator after 20 seconds.
setTimeout(() => {
  myElevator.stop();
}, 20000);
