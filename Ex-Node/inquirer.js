import inquirer from "inquirer";

inquirer
.prompt([
    {
        message: "Informe sua data de nascimento",
        name : "data"
    }
])
.then((answers) =>{
    var n1 = parseInt(answers["data"]);

    if(n1 < 18){
        console.log("Voce é menor de idade");
    }else{
        console.log("Voce é maior de idade");
    }
})