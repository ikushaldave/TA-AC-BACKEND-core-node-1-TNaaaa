const http = require("http");
const url = require("url");

// Q1

const server5000 = http.createServer((req, res) => {
	console.log(req, res);
});

server5000.listen(5000, () => {
	console.log("Server Running on Port 5000");
});

// Q2

const server5100 = http.createServer((req, res) => {
	res.end("My First server in NodeJS");
});

server5100.listen(5100, () => {
	console.log("Server Running on Port 5100");
});

// Q3

const server5555 = http.createServer((req, res) => {
	console.log(req.headers);
	res.end(req.headers["user-agent"]);
});

server5555.listen(5555, () => {
	console.log("Server Running on Port 5555");
});

// Q4

const server5566 = http.createServer((req, res) => {
	console.log(req.url, req.method);
	res.write(`URL: ${req.url} `);
	res.end(`Method: ${req.method}`);
});

server5566.listen(5566, () => {
	console.log("Server Running on Port 5566");
});

// Q5

const server7000 = http.createServer((req, res) => {
	res.end(JSON.stringify(req.headers));
});

server7000.listen(7000, () => {
	console.log("Server Running on Port 7000");
});

// Q6

const server3333 = http.createServer((req, res) => {
	res.statusCode = 202;
	res.end();
});

server3333.listen(3333, () => {
	console.log("Server Running on Port 3333");
});

// Q7

const server8000 = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/html");
	res.end("<h3>Welcome to altcampus</h3>");
});

server8000.listen(8000, () => {
	console.log("Server Running on Port 8000");
});

// Q8

const server8001 = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end("<h3>Welcome to altcampus</h3>");
});

server8001.listen(8001, () => {
	console.log("Server Running on Port 8001");
});

// Q9

const server8888 = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(JSON.stringify({ success: true, message: "Welcome to Nodejs" }));
});

server8888.listen(8888, () => {
	console.log("Server Running on Port 8888");
});

// Q10

const server5050 = http.createServer((req, res) => {
	console.log(req.method);
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end(`<h2>posted for first time</h2>`);
});

server5050.listen(5050, () => {
	console.log("Server Running on Port 5050");
});

// Q11

const server2345 = http.createServer((req, res) => {
	if (req.url == "/") {
		res.end("Kushal Dave");
	} else if (req.url == "/about") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end("<h2>Kushal Dave</h2>");
	} else {
		res.writeHead(400, { "Content-Type": "text/html" });
		res.end("<h2>Page Not Found</h2>");
	}
});

server2345.listen(2345, () => {
	console.log("Server Running on Port 2345");
});

// Q12

const server1234 = http.createServer((req, res) => {
	const form = `<form>
    <label>Name: 
      <input type="text" name="name" placeholder="Kushal Dave">
    </label>
    <label>Email: 
      <input type="email" name="email" placeholder="hey@xyz.com">
    </label>
  </form>`;

	if (req.url == "/users" && req.method == "GET") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(form);
	} else if (req.url == "/users" && req.method == "POST") {
		res.end("Posted for Second Time");
	} else {
		res.writeHead(400, { "Content-Type": "text/html" });
		res.end("<h2>Page Not Found</h2>");
	}
});

server1234.listen(1234, () => {
	console.log("Server Running on Port 1234");
});

// Q13

const server4444 = http.createServer((req, res) => {
	const parsedURL = url.parse(req.url, true);
	console.log(parsedURL.pathname, req.url);
	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(JSON.stringify(parsedURL.query));
});

server4444.listen(4444, () => {
	console.log("Server Running on Port 4444");
});
