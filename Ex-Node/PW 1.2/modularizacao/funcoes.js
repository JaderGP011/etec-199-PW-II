import chalk from "chalk";

export function ranSexo() {
    const nSexo = Math.floor(Math.random() * 2);
    return nSexo === 0 ? "Masculino" : "Feminino";
}

export function calcular() {
    const sexo = ranSexo();
    const peso = Math.floor(Math.random() * 120) + 1;
    let pesoId;
    const alt = Math.floor(Math.random() * 210) + 1;
    let saida = "";
    let saida2 = "";

    if (sexo === "Masculino") {
        pesoId = 52 + (0.75 * (alt - 152.4));
        saida = `Sexo: ${sexo}<br>Seu peso ideal deve ser: ${pesoId.toFixed(2)}`;
        if (peso > pesoId * 2) {
            console.log(chalk.bgRed("Recomendo que procure um médico especializado"));
            saida2 = "<p>Recomendo que procure um médico especializado</p>";
        }
    } else {
        pesoId = 52 + (0.67 * (alt - 152.4));
        saida = `Sexo: ${sexo}<br>Seu peso ideal deve ser: ${pesoId.toFixed(2)}`;
        if (peso > pesoId * 2) {
            console.log(chalk.bgRed("Recomendo que procure um médico especializado"));
            saida2 = "<p>Recomendo que procure um médico especializado</p>";
        }
    }

    return { saida, saida2 };
}