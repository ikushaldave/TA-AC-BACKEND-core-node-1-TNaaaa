const http = require("http");

const server = http.createServer((req, res) => {
	if (req.method == "POST") res.end("POST Completed");
	res.statusCode = 201;
	res.setHeader("Content-Type", "text/html");
	res.end("Server is Working");
});

server.listen(4444, "localhost");
