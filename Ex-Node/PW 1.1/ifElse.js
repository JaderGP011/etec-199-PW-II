import inquirer from "inquirer";
import chalk from "chalk"

 inquirer
 .prompt([
    {
        message:" informe o valor",
        name: "num"
    }

 ])

 .then((answers) =>{
    var n1 = parseInt(answers["num"]);
    if(n1 % 2 == 0){
        console.log(chalk.bgBlue(`${n1} ´ um numero par`));
    }else{
        console.log(chalk.bgBlue(`${n1} ´ um numero impar`));
    }
 })
 .catch((error) =>{
    console.log(error);
 });