function rollDice()
{
    const diceInput = document.getElementById("diceInput").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const diceValues = [];
    const imagesArray = [];

    for (let i = 0; i < diceInput; i++)
    {
        const value = Math.floor(Math.random() * 6) + 1;
        diceValues.push(value);
        imagesArray.push(`<img src="Dice Images/${value}.png">`);
    }

    diceResult.textContent = `Dice rolled result: ${diceValues.join(", ")}`;
    diceImages.innerHTML = imagesArray.join("");
}

document.getElementById("rollButton").onclick = rollDice;