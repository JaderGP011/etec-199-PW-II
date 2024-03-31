import http from "node:http";
import chalk from "chalk"

var n1 = Math.floor(Math.random() *100)+1;
var output = "";
var par = `${n1} é um numero par`;
var impar = `${n1} é um numero ímpar`;

if(n1 % 2 == 0){
    console.log(chalk.bgBlue(par));
    output = par;
}else{
    console.log(chalk.bgBlue(impar));
    output = impar;
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
        <title>If Else</title>
    </head>
    <body>
      <h1>Verificando se ${n1} é par ou impar</h1>
      ${output}
    </body>
    </html>
    `)
})

const PORT = 3013;
server.listen(PORT, () => {
    console.log(chalk.bgYellow(`Rodando em http://localhost:${PORT}`));
});