const LAT = "47.4979";
const LONG = "19.0402";
const APIKEY = "5736c1d2e697ad882d7f471c5aff64d5";

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
let weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LONG}&appid=${APIKEY}&units=metric`;
let requestParams = {

}

fetch(weatherAPIURL)
.then(data=> {return data.json();})
.then(response => {
    weatherStatus = document.getElementById("weatherStatus");
    weatherDetails = document.getElementById("weatherDetails");
    icon = document.getElementById("weatherIcon");
    temp = document.getElementById("temp");
    windspeed = document.getElementById("windspeed");

    weatherStatus.innerHTML = response.weather[0].main;
    weatherDetails.innerHTML = response.weather[0].description;
    icon.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
    temp.innerHTML = response.main.temp;
    windspeed.innerHTML = response.wind.speed;

    const tempVal = response.main.temp;
    const windSpeedVal = response.wind.speed;
    const windchillElement = document.getElementById("windchill");

    //Calculate windchill, if conditions are met 

    if(tempVal >= 10 || windSpeedVal < 4.82) {
        windchillElement.innerText = "N/A";
    } else {
        windchillElement.innerText = Math.round(13.12 + (0.6215 * tempVal) - (11.37 * windSpeedVal**0.16) + (0.3965 * tempVal * windSpeedVal**0.16)) + "° F";
}
})


/* <p>Temperature: <span id="temp"></span>°</p>
<p>Wind Speed: <span id="windSpeed"></span>mph</p>
// <p>Windchill: <span id="windchill"></span></p> */



