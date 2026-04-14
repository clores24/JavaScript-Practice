const attemptsText = document.getElementById("attempts");
const resultText = document.getElementById("result");
const guessButtons = document.querySelectorAll(".guessBtn");

const min = 1;
const max = 10;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 3;
let gameOver = false;
attemptsText.textContent = `${attempts}`;

function guessButtonClicked(guessButtons)
{
    guessButtons.forEach(button =>
        {
            button.onclick = function()
            {
                if(isGameOver()) return;
                attempts--;
                attemptsText.textContent = `${attempts}`;
                let userGuess = parseInt(button.dataset.number);

                if (userGuess === randomNumber)
                {
                    resultText.textContent = "Congratulations! You've guessed the number!";
                    gameOver = true;
                    return;
                }

                if (attempts <= 0)
                {
                    resultText.textContent = `Game Over! The correct number was ${randomNumber}.`;
                    gameOver = true;
                    return;
                }
                else
                {
                    resultText.textContent = "Wrong guess! Try again.";
                }
            }
        }
    )
}

function isGameOver()
{    
    return gameOver;
}

guessButtonClicked(guessButtons);