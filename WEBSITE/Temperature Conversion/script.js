const inputNumber = document.getElementById("inputNumber"); 
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");

let temp;

function convert()
{
    if (toCelsius.checked) 
    {
        temp = parseFloat(inputNumber.value);
        const celsius = (temp - 32) * 5 / 9;    
        result.textContent = `${celsius.toFixed(2)}°C.`;
    }
    else if (toFahrenheit.checked) 
    {
        temp = parseFloat(inputNumber.value);
        const fahrenheit = (temp * 9 / 5) + 32;
        result.textContent = `${fahrenheit.toFixed(2)}°F.`;
    }
    else
    {
        result.textContent = "Please select a conversion type...";
    }
}