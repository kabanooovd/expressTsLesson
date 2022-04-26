import http from "http";

const host = "127.0.0.1"

const PORT = 5000;

const server = http.createServer((req, res) => {
    req.method // GET, POST...
    req.url // /rotes

    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain")
    res.end("Hello world!!!")
})

server.listen(PORT, host, () => {
    console.log(`Server has startd... no ${PORT}`)
})