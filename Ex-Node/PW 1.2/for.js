import http from "node:http";

let n1 = 2;
let final = 100;
let i;
let output = 0  ;

for ( i = 0; i <= final; i += n1) {
    output += `<p>${i}</p>`;
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    res.end(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>for</title>
    </head>
    <body>
      <h1>O progama serve para contar os numeros de 2 em 2 até 100 </h1>
      <p>intervalo:</p>
      ${output}
    </body>
    </html>
    `)
})

const PORT = 3332;
server.listen(PORT, () =>{
    console.log(`Rodando em http://localhost:${PORT}`);
});

