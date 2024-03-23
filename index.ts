#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a rndom number... Done
// 2) user input for guessing number...done
// 3) compare user input with computer genersted number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);



const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Guess a number to start game between (1 - 6):",
    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulations! You guessed Right Number..");
}else{
    console.log("Oops! Sorry You Guessed wrong Number..")
}
