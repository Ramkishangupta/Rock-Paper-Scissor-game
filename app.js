let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
msg=document.querySelector("#msg");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIx = Math.floor(Math.random() * 3);
    return options[randIx];
}
const drawGame=() => {
    console.log("game was draw.");
    msg.innerText="Game was draw ! Try Again"
    msg.style.backgroundColor="#081b31";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("win");
        msg.innerText = `You Win! Your ${userChoice} beats over ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("lose"); // Corrected typo from "loose" to "lose"
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText = `You Lost  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user Choice = ", userChoice);
    // generate computer choice
    const compChoice = getCompChoice();
    console.log("comp choice is", compChoice);
    // logic
    if (userChoice === compChoice) {
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice); // Pass userChoice and compChoice to showWinner
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
