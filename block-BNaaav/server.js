const http = require("http");
const fs = require("fs");

const server = http.createServer(routeHandler);

function fsHandler(dirPath, pathName, contentType, res) {
	fs.readdir(dirPath, (err, file) => {
		if (err) throw err;
		if (file.includes(pathName.split("/").pop())) {
			res.writeHead(200, { "Content-Type": `${contentType}` });
			fs.createReadStream(`.${pathName}`).pipe(res);
		}
	});
}

function routeHandler(req, res) {
	// Getting Extension of File
	const extName = req.url.split(".").pop();

	// Based on extension Serving Content and Proper File
	if (req.url == "/" || req.url == "/index.html") {
		res.writeHead(200, { "Content-Type": "text/html" });
		fs.createReadStream("./index.html").pipe(res);
	} else if (extName == "html") {
		fsHandler(__dirname, req.url, `text/${extName}`, res);
	} else if (extName == "css") {
		fsHandler("./assets/css", req.url, `text/${extName}`, res);
	} else if (extName == "js") {
		fsHandler("./assets/js", req.url, `text/${extName}`, res);
	} else if (["svg", "png", "jpg", "jpeg"].includes(extName)) {
		fsHandler("./assets/images", req.url, `image/${extName}`, res);
	} else if (["woff", "woff2", "ttf"].includes(extName)) {
		fsHandler("./assets/webfonts", req.url, `font/${extName}`, res);
	} else {
		res.writeHead(404, { "Content-Type": "text/html" });
		res.end("Page Not Found");
	}
}

server.listen(3000, () => {
	console.log("Server Running on Port 3000");
});
