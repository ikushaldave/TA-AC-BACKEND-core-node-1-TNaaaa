const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	if (req.url == "/" && req.method == "GET") {
		fs.readFile("./index.html", (err, data) => {
			if (err) throw err;
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data.toString());
		});
	} else if (req.url == "/about" && req.method == "GET") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end("<h2>this is all about NodeJS</h2>");
	} else if (req.url == "/about" && req.method == "POST") {
		res.writeHead(200, { "Content-Type": "text/json" });
		res.end("{message: this is a post request}");
	} else {
		res.end("Page Not Found");
	}
});

server.listen(3000, () => {
	console.log("Server Started on PORT 3000");
});
