const os = require("os")
// ES6 syntax
// import os from "os"

// Info about user
const user = os.userInfo()
console.log(user);

// Return the system uptime
console.log(`The system uptime is ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS);