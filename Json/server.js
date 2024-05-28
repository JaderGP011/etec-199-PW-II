const http = require("http");
const fs = require("fs");

const PORT = 3300;

const server = http.createServer((req, res) => {
    fs.readFile('produto.txt', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end("Erro ao carregar a página");
        }
        res.writeHead(200, {"content-type": "text/plain; charset=utf-8"});
        res.end(data);
    })
})

server.listen(PORT, () => {
    console.log(`Servidor rodando em: https: http://localhost:${PORT}`)
                                             // Ctrl + Click quando for exibido no console
})