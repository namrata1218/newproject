let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user_score");
const compScorePara=document.querySelector("#comp_score");
const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
    //rock paper scissors
}

const drawGame=()=>{
    console.log("draw game");
    msg.innerText="Game was draw. Play again";
    msg.style.backgroundColor="#EFFD5F";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win");
        msg.innerText=`You win ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
            
        

    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
console.log("userChoice=",userChoice);
const compChoice=genCompChoice();
console.log("compChoice=",compChoice);
if(userChoice===compChoice){
    drawGame();  
}
else{
    userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"? false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="scissors"? false:true;
    }
    else{
       userWin= compChoice==="rock"? false:true;
    }
    showWinner(userWin, userChoice, compChoice);
}
};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        console.log("choice was clicked",userChoice);
playGame(userChoice)
    });
});