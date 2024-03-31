import http from 'node:http';
import chalk from 'chalk';

const lista = Array.from({ length: 10 }, (_, index) => index + 1);
const numeroDigitado = Math.floor(Math.random() *10)+1;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    let output;
    if (lista.includes(numeroDigitado)) {
        console.log(chalk.bgBlue("Elemento encontrado!"));
        output = '<p>Elemento encontrado!</p>';
    } else {
        console.log(chalk.bgRed("Elemento não encontrado!"));
        output = '<p>Elemento não encontrado!</p>';
    }

    res.end(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Array</title>
    </head>
    <body>
      <h1>Verificando se o número ${numeroDigitado} está na lista:</h1>
      <hr>
      ${output}
    </body>
    </html>
    `);
});

const PORT = 3333;
server.listen(PORT, () => {
    console.log(chalk.bgYellow(`Rodando em http://localhost:${PORT}`));
});