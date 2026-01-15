function convertTemperature() {
    let temp = document.getElementById("tempValue").value;
    let unit = document.getElementById("unit").value;

    let celsiusBox = document.getElementById("celsius");
    let fahrenheitBox = document.getElementById("fahrenheit");
    let kelvinBox = document.getElementById("kelvin");

    if (temp === "") {
        celsiusBox.innerHTML = "--";
        fahrenheitBox.innerHTML = "--";
        kelvinBox.innerHTML = "--";
        return;
    }

    temp = parseFloat(temp);

    let celsius, fahrenheit, kelvin;

    if (unit === "Celsius") {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
    }
    else if (unit === "Fahrenheit") {
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = (temp - 32) * 5/9 + 273.15;
    }
    else if (unit === "Kelvin") {
        celsius = temp - 273.15;
        fahrenheit = (temp - 273.15) * 9/5 + 32;
        kelvin = temp;
    }

    celsiusBox.innerHTML = celsius.toFixed(2) + " °C";
    fahrenheitBox.innerHTML = fahrenheit.toFixed(2) + " °F";
    kelvinBox.innerHTML = kelvin.toFixed(2) + " K";
}
