const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	if (req.method == "GET" && req.url == "/file") {
		fs.readFile("./node.html", (err, data) => {
			if (err) throw err;
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	} else if (req.method == "GET" && req.url == "/stream") {
		fs.createReadStream("./node.html").pipe(res);
	} else {
		res.writeHead(404, { "Content-Type": "text/html" });
		res.end("404 Page Not Found");
	}
});

server.listen(5555, () => {
	console.log("Server Running at PORT 5555");
});
