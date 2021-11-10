const os = require('os');

console.log("Your operation system: " + os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());