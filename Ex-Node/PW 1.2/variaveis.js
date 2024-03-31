import http from 'node:http';

let nome = 'Ortiz';
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Olá</title>
          </head>
          <body>
            <h1>Oi, ${nome}!</h1>
          </body>
        </html>
      `); 
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});