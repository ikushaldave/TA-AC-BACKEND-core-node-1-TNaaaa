const fs = require("fs");

const syncRead = fs.readFileSync("./index.md");

fs.readFile("./index.md", (err, content) => {
	if (err) throw err;
	console.log("Async: ", content);
});

console.log("Sync: ", syncRead);

var buff1 = Buffer.alloc(10);

console.log(buff1);

buff1.write("Welcome to Buffer");

console.log(buff1.toString());
