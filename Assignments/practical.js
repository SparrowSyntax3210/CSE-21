const EventEmitter = require("events");

class Custom extends EventEmitter {
  greet() {
    console.log("Greeting function called");
  }

  exit() {
    console.log("Exit function called");
  }
}

const eventHandler = new Custom();

eventHandler.on("greet", () => {
  console.log("This is Greet Event");
});

eventHandler.on("exit", () => {
  console.log("This is Exit Event");
});

eventHandler.greet();
eventHandler.exit();
