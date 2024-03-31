import inquirer from "inquirer";

inquirer
    .prompt([

        {
            message: "O progama serve para contar os numeros em um intervalo especifico, insira o valor do intervalo",
            name: "num"
        },
        {
            message: "Até quanto você quer que o progama conte?",
            name: "final"
        }
    ])
    .then((answers) => {
        var final = parseInt(answers["final"]);
        var n1 = parseInt(answers["num"]);
        for (var i = 0; i < final; i += n1) {
            console.log(i);
        }

    })