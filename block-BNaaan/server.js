const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req.url);
	console.log(req.method);
	console.log(req.headers);
	res.end("Server Running");
});

server.listen(3000, "localhost", () => {
	console.log("Server Started on PORT 3000");
});
