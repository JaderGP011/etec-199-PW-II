import http from 'node:http';
import chalk from 'chalk';

var idade = Math.floor(Math.random() * 120) + 1;
let maior = "Voce é maior de idade";
let menor = "Voce é menor de idade";
let output = "";
if (idade < 18) {
    console.log(chalk.bgRed(menor));
    output = menor;
} else {
    console.log(chalk.bgGreen(maior));
    output = maior;
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inquirer</title>
    </head>
    <body>
      <h1>Verificando se ${idade} é maior que 18</h1>
      ${output}
    </body>
    </html>
    `)
})
const PORT = 8810;
server.listen(PORT, () => {
    console.log(chalk.bgYellow(`Rodando em http://localhost:${PORT}`));
})