const attemptsText = document.getElementById("attempts");
const resultText = document.getElementById("result");
const guessButtons = document.querySelectorAll(".guessBtn");

const min = 1;
const max = 10;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let gameOver = false;

guessButtons.forEach(button =>
    {
        button.onclick = function()
        {
            if (gameOver) return;

            let userGuess = parseInt(button.dataset.number);
            attempts++;
            attemptsText.textContent = `Attempts: ${attempts}`;

            if (userGuess === randomNumber)
            {
                resultText.textContent = "Congratulations! You've guessed the number!";
                gameOver = true;
            }

            if (attempts >= 3)
            {
                resultText.textContent = `Game Over! The correct number was ${randomNumber}.`;
                gameOver = true;
            }
            else
            {
                resultText.textContent = "Wrong guess! Try again.";
            }
        }
    }
)