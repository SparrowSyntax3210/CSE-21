const EventEmitter = require("events");

const event = new EventEmitter();

event.on("greet", () => {
  console.log("Event Emitter");
});

event.emit("greet");
