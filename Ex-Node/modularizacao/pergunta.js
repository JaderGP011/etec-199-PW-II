import inquirer from "inquirer";
function pergunta() {
    inquirer
        .prompt([
            {
                message: "Seu sexo é masculino ou feminino?",
                name: "sexo"
            },

            {
                message: "quanto você pesa?",
                name: "peso"
            },
            {
                message: "Qual é sua altura?",
                name: "altura"
            }
        ])
        .then((answers) => {
            let pesoId;
            if (sexo.toLowerCase() === "masculino") {
                pesoId = 52 + (0.75 * (alt - 152.4));
                console.log(`Seu peso ideal deve ser: ${pesoId.toFixed(2)}`);
                if (peso > pesoId * 2) {
                    console.log("Recomendo que procure um médico especializado");
                }
            } else if (sexo.toLowerCase() === "feminino") {
                pesoId = 52 + (0.67 * (alt - 152.4));
                console.log(`Seu peso ideal deve ser: ${pesoId.toFixed(2)}`);
                if (peso > pesoId * 2) {
                    console.log("Recomendo que procure um médico especializado");
                }
            }
        })
}