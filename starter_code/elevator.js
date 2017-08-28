class Elevator {
  constructor(){
    this.floor      = 0;

    // current direction that the elevator is moving in
    // ('up' or 'down');
    this.direction = 'up';

    // max value of 'this.floor'
    this.MAXFLOOR   = 10;

    // an array of people in the elevator waiting to be dropped off;
    this.passengers = [];

    // an array of people that are witing to be picked up
    this.waitingList = [];

    // an array of numbers of the floors which the elevator must stop
    // either to drop off or pick up
    this.requests   = [];
  }

  start() {
    // begin a set interval that calls "update()" every second
    this.cow = setInterval(() => {
      this.update()
    }, 1000)
  }

  stop() {
    // cancel the setInterval started by "start()"
    clearInterval(this.cow);
  }

  update() {
    // for now, will only call 'log()'
    this.log();
  }

  log() { // displays the current direction and the current floor
      //"Direction: up | Floor 5";
      console.log("Direction is: " + this.direction + " | Floor: " + this.floor);
   }

  _passengersEnter() { }
  _passengersLeave() { }

  floorUp() {
    if (this.floor => 10) {
      console.log("can't go up");;
    } else (this.floor < 10) {
      this.floor++;
    }
  }

  floorDown() {
    if (this.floor >= 10) {
      this.floor--;
    }
  }
  call() { }
}

module.exports = Elevator;
