const { Server } = require("http");
const { version, name } = require("./package.json");

// this is a fake comment
// the only purpose is, to test the github action
// the following number increases with each comment
//
// test: 2

console.log(`Starting ${name} v${version}...`);

const {
    HTTP_HOST = "0.0.0.0",
    HTTP_PORT = "8080"
} = process.env;

const server = new Server();

server.on("request", (req, res) => {
    res.statusCode = 200;
    res.write("Hello World");
    res.end();
});


server.listen(Number(HTTP_PORT), HTTP_HOST, (err) => {
    console.log(err || `Listening on http://${HTTP_HOST}:${HTTP_PORT}`);
});


process.on("SIGINT", () => {
    server.close(() => {
        process.exit();
    });
});
