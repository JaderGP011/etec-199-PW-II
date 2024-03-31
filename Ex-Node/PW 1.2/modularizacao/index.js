import http from 'node:http';
import chalk from 'chalk';
import { ranSexo, calcular } from './funcoes.js';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const { saida, saida2 } = calcular();

    res.end(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Modularização</title>
        </head>
        <body>
            <h1>Cálculo de Peso Ideal</h1>
            <p>${saida}</p>
            ${saida2}
        </body>
        </html>
    `);
});

const PORT = 1001;
server.listen(PORT, () => {
    console.log(chalk.bgYellow(`Rodando em http://localhost:${PORT}`));
}); 