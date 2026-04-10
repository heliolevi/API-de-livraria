import http from "http";

const PORT = 3000

const server = http.createServer((req, res) => {
    //cabecalho
    res.writeHead (200, {"Content-Type": "text/plain"});
    res.end("Curso de Node, teste.")
})

server.listen(PORT, () => {
    console.log("Servidor escutando!")
});

