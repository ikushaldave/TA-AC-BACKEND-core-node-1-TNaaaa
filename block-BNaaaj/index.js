console.log("Welcome to Nodejs");

const os = require("os");
const { parse } = require("url");
const { readFile, unlink } = require("fs");
const area = require("./area.js");

console.log(os.cpus().length, os.freemem(), os.uptime(), os.version());

console.log(area.areaOfCircle(2));
console.log(area.areaOfSquare(2));
console.log(area.areaOfRect(3, 2));

const buf1 = Buffer.alloc(12);
buf1.write("Hello World!");
console.log(buf1);

const buf2 = Buffer.allocUnsafe(12);
buf2.write("Hello World!");
console.log(buf2);

// Blocking

console.log("start");
console.time("time");
var i = 1000000000;
while (i) {
	i--;
}
console.timeEnd("time");
console.log("End");

// Non Blocking

console.log("start");
console.time("time1");
setTimeout(() => {
	var i = 1000000000;
	while (i) {
		i--;
	}
	console.timeEnd("time1");
}, 0);
console.log("End");

// http

const parsedUrl = parse("https://airindia.com/fares/calculate?from=delhi&to=detroit");

console.log(parsedUrl.query, parsedUrl.pathname, parsedUrl.protocol, parse(parsedUrl.query));
