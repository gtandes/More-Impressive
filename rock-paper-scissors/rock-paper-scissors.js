const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    //Computer Options
    const computerOptions = ["ROCK", "PAPER", "SCISSORS"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        //Here is where we call compare hands
        setTimeout(() => {
          compareHands(this.textContent, computerChoice);

          //Update images
          playerHand.src = `${this.textContent}.png`;
          computerHand.src = `${computerChoice}.png`;
        }, 2000);
        /*console.log(computerChoice);*/
        /*console.log(this);*/

        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  /*const glow = () => {
    if (winner.textContent === "Computer Wins") {
      document
        .getElementById("playerhand")
        .classList.add("red-glow")
        .remove("gray-glow green-glow");
      document
        .getElementById("computerhand")
        .classList.add("green-glow")
        .remove("gray-glow red-glow");
    } else if (winner.textContent === "Player Wins") {
      document
        .getElementById("playerhand")
        .classList.add("green-glow")
        .remove("gray-glow red-glow");
      document
        .getElementById("computerhand")
        .classList.add("red-glow")
        .remove("gray-glow green-glow");
    } else {
      document
        .getElementById("playerhand")
        .classList.add("gray-glow")
        .remove("red-glow green-glow");
      document
        .getElementById("computerhand")
        .classList.add("gray-glow")
        .remove("red-glow green-glow");
    }
  };*/

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "TIE!";
      document.getElementById("playerhand").classList.add("gray-glow");
      setTimeout(function() {
        document.getElementById("playerhand").classList.remove("gray-glow");
      }, 1000);

      document.getElementById("computerhand").classList.add("gray-glow");
      setTimeout(function() {
        document.getElementById("computerhand").classList.remove("gray-glow");
      }, 1000);
      return;
    }

    //Check for a Rock
    if (playerChoice === "ROCK") {
      if (computerChoice === "SCISSORS") {
        winner.textContent = "PLAYER WINS!";
        pScore++;
        updateScore();
        document.getElementById("playerhand").classList.add("green-glow");
        setTimeout(function() {
          document.getElementById("playerhand").classList.remove("green-glow");
        }, 1000);
        return;
      } else {
        winner.textContent = "COMPUTER WINS!";
        cScore++;
        updateScore();
        document.getElementById("computerhand").classList.add("green-glow");
        setTimeout(function() {
          document
            .getElementById("computerhand")
            .classList.remove("green-glow");
        }, 1000);
        return;
      }
    }

    //Check for Paper
    if (playerChoice === "PAPER") {
      if (computerChoice === "SCISSORS") {
        winner.textContent = "COMPUTER WINS!";
        cScore++;
        updateScore();
        document.getElementById("computerhand").classList.add("green-glow");
        setTimeout(function() {
          document
            .getElementById("computerhand")
            .classList.remove("green-glow");
        }, 1000);
        return;
      } else {
        winner.textContent = "PLAYER WINS!";
        pScore++;
        updateScore();
        return;
      }
    }

    //Check for Scissors
    if (playerChoice === "SCISSORS") {
      if (computerChoice === "ROCK") {
        winner.textContent = "COMPUTER WINS!";
        cScore++;
        updateScore();
        document.getElementById("computerhand").classList.add("green-glow");
        setTimeout(function() {
          document
            .getElementById("computerhand")
            .classList.remove("green-glow");
        }, 1000);
        return;
      } else {
        winner.textContent = "PLAYER WINS!";
        pScore++;
        updateScore();
        updateScore();
        document.getElementById("playerhand").classList.add("green-glow");
        setTimeout(function() {
          document.getElementById("playerhand").classList.remove("green-glow");
        }, 1000);
        return;
      }
    }
  };

  //This calls all inner function
  startGame();
  playMatch();
  /*updateScore();*/
};

//start the game function
game();
