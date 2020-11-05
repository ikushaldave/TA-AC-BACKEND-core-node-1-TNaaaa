const http = require("http");

const server = http.createServer((req, res) => {
	res.end("Hi I am a Response");
});

console.log(server);

server.listen(4000, "localhost", () => {
	console.log("Server Started at Port 4000");
});
