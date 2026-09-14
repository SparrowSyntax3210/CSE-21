const EventEmitter=require("events");

class MyEmitter extends EventEmitter{}
const event= new EventEmitter();
event.on("greet",(msg)=>{
    console.log(`Hello ${msg}`);
})
event.on("exit",()=>{
    console.log("Exiting the program");
});
event.emit("greet","CSE 21 , This is FSD Class");
event.emit("exit");


class Button extends EventEmitter{
    click(){
        console.log('call button click event\n');
        this.emit("click");
    }
    mouseover(){
        console.log("/ncall button mouseover event");
        this.emit("mouseover");
    }
}

const button= new Button();
button.click();
button.mouseover();

