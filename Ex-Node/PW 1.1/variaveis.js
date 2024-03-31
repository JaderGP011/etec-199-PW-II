import inquirer from "inquirer";

inquirer
.prompt([
    {
        message: "Qual é o seu nome?",
        name: "resp"
    }
])

.then((answers) => {
    var nome = answers["resp"];
    console.log(`Olá, ${nome}!`)
})