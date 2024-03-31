import http from 'node:http';
import chalk from "chalk";

var output = '';
var i = 0;
do {
    output += `<p> ${i}<p/>`;
    i++
} while (i <= 500);
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    res.end(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Do While</title>
    </head>
            <body>
                <h1>Numeros 100 a 500</h1>
                ${output}
            </body>
        </html>
    `);
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(chalk.bgBlue`Rodando em http://localhost:${PORT}`);
});