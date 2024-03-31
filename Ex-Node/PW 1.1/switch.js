import inquirer from "inquirer";

inquirer.prompt([
        {
            message: "Insira o numero do mês e verá se ele tem 30, 31 ,28 ou 29 dias",
                name: "mes"
        },
        {
            message: "Agora insira o ano para verificar se ele é bissexto ou não",
            name: "ano"
        }

])
.then((answers) =>{
    var mes = parseInt(answers["mes"]);
    var ano = parseInt(answers["ano"]);
    var mensagem30 = "mes com 30";
    var mensagem31 = "mes com 31";
    function gerar(){
        switch(mes){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                console.log(mensagem31);
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                console.log(mensagem30);
                break;
            case 2:
                if(ano % 4 == 0){
                    console.log("mes com 29");
                }else{
                    console.log("mes com 28");
                }
        }
    }
    gerar();

})