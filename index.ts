#! /usr/bin/env node
import inquirer from "inquirer";


const randomNumber = Math.floor(Math.random() *1 + 10);

const answer = await inquirer.prompt([
{
    name:"userGuessedNumber",
    type:"number",
    message:"Please guess a number 1 to 10:",
}
]);
if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulation ! You guessed a right number.");
}else{
    console.log("You guessed a wrong number ");
}
