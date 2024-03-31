import http from 'node:http';
import chalk from 'chalk';

function gerarAleatorio(){
    return Math.floor(Math.random() * 6) + 1;
}
let num = 6;
var output = ``
var escolhido = gerarAleatorio();

if(num != escolhido){
    console.log(chalk.bgRed("Errado"));
    output = `<p>Errou! ;-;<p/>`
}else{
    console.log(chalk.bgblue("Certo"));
    output = `<p>Acertou! :)<p/>`
}

const server = http.createServer((req, res) => {
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Função</title>
    </head>
    <body>
        <p>Verificando se ${num} está na lista</p>
        ${output}
    </body>
    </html>
    `)
})
const PORT = 8800;
server.listen(PORT, () => {
    console.log(chalk.bgYellow(`Rodando em http://localhost:${PORT}`));
})