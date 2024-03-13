const inquirer = require("inquirer");


const lista = Array.from({ length: 10 }, (_, index) => index + 1);

inquirer.prompt([
    {
        message: "Digite um número para verificar se está na lista:",
        name: "numero"
    }
])
.then((resposta) => {
    const numeroDigitado = parseInt(resposta.numero);


    if (lista.includes(numeroDigitado)) {
        console.log("Elemento encontrado!");
    } else {
        console.log("não encontrado");
    }
});