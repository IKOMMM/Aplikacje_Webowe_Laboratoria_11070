/*Made with https://youtu.be/KqZGuzrY9D4*/
// Pobranie elementów z dokument
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// Zmienne i stałe
const kelvin = 273; 
//Api 
const key= '3fe857ce3e9c56a1d1ac96c0e69e975a';

//Sprawdź czy przeglądarka wspiera geolokacje
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Przeglądarka nie wspiera lokalizacji 😔</p>";
}

//Ustaw położenie użytkownika
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

// Wskaż bład jeżeli jest problem z geolokacją
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p>Brak włączonej lokalizacji 😔</p>`;
}

//Pobierz pogodę z API 
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
    .then(function(response){
        let data = response.json();
        return data;
    })

    .then(function(data){   
        weather.temperature.value= Math.floor(data.main.temp - kelvin);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })

    .then (function(){
        displayWeather();
    });
}

// Wyświetl pogodę
function displayWeather(){
    iconElement.innerHTML = `<img src="img/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// Konwersja C na F
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// Konwersja po kliknięciu użytkownika 
tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;

    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);

        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});