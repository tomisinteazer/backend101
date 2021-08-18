//imports

const { EventEmitter } = require("events");
let httpmod = require("http");

//inits
const eventMaker = new EventEmitter();


//imports and inittializations are on top



function spacer() {
    console.log(".");
    console.log(".");
    console.log(".");
    console.log(".");
    console.log(".");

    console.log("done");
}

function eventtester() {
    eventMaker.on("env", () => {
        console.log(process.env);
        spacer();
    });

    eventMaker.emit("env");
}

function playgroundServer() {
    let myServer = httpmod.createServer((req, res) => {
        if (req.url === "/") {
            res.write("took you long enough");
            res.end();
        }
        if (req.url === "/about") {
            res.write("about blah blah  enough");
            res.end();
        }
    });
    myServer.listen(7500);
    myServer.on("connection", () => {
        console.log("basic server don dey run");
    });
    //will comeback to this later or not
}
function psuedomain() {


    // playgroundServer();
    eventtester();
}
//'tjkirch', darkblood ,fino-time
psuedomain();


