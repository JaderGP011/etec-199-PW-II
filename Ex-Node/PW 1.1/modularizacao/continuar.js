import inquirer from "inquirer";

let resp;

function continuar() {
    return inquirer
        .prompt([
            {
                message: "Deseja continuar? 1 = sim, 2 = não",
                name: "resp"
            }
        ])
        .then((answers) => {
            resp = answers.resp;
        });
}

export { continuar, resp };