import inquirer from "inquirer";

inquirer
.prompt([
    {
        message: "tent adivinhar o numero sorteado entre 1 e 6",
        name: "num"
    }
])
.then((answers) =>{
    var n1 = parseInt(answers["num"]);
    function gerarAleatorio(){
        return Math.floor(Math.random() * 6) + 1;
    }
    var escolhido = gerarAleatorio();
    if(n1 != escolhido){
        console.log("Errou!");
    }else{
        console.log("Parabens!! voc~e acertou");
    }
    
})
.catch((erro) =>{
    console.log(error);
});