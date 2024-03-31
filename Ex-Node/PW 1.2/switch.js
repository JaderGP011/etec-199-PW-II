import http from 'node:http';
import chalk from "chalk";

const RAN12 = Math.floor(Math.random() *12)+1; // mes
const ranANO = Math.floor(Math.random() *2024)+1; // ano

var mes = RAN12;
var ano = ranANO;
var mensagem30 = "mes com 30";
var mensagem31 = "mes com 31";
var output = "";
function gerar(){
    switch(mes){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(chalk.bgCyan(mensagem31));
            output = mensagem31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log(chalk.bgCyan(mensagem30));
            output = mensagem30;
            break;
        case 2:
            if(ano % 4 == 0){
                console.log(chalk.bgWhite(`mes com 29`));
            }else{
                console.log(chalk.bgWhite(`mes com 28`));
            }
    }
}
gerar();

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Switch</title>
    </head>
    <body>
      <h1>"Verificando se o mês ${RAN12} tem 30, 31, 28, ou 29 dias</h1>
      ${output}
    </body>
    </html>
    `)
})

const PORT = 3334;
server.listen(PORT, () => {
    console.log(chalk.bgYellow(`Rodando em http://localhost:${PORT}`));
})