const LAT = "33.1215847";
const LONG = "-117.3290015";
const APIKEY = "5736c1d2e697ad882d7f471c5aff64d5";


//,
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
let weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LONG}&appid=${APIKEY}&units=imperial`;

fetch(weatherAPIURL)
.then(data=> {return data.json();})
.then(response => {
    weatherStatus = document.getElementById("weatherStatus");
    // weatherDetails = document.getElementById("weatherDetails");
    let icon = document.getElementById("weatherIcon");
    let temp = document.getElementById("temp");
    let windspeed = document.getElementById("windspeed");
    let humid = document.getElementById("humid");

    weatherStatus.innerHTML = response.weather[0].main;
    icon.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
    temp.innerHTML = response.main.temp;
    humid.innerHTML = response.main.humidity;

})


//To get the forecast
weatherAPIURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LONG}&appid=${APIKEY}&units=imperial`;
fetch(weatherAPIURL)
.then(data=> {return data.json();})
.then(response => {
    
    let highTempP, lowTempP, iconImg;

    for (let i = 0; i <= 2; i++) {
        highTempP = document.getElementById("forecast-" + (i+1).toString() + "-high");
        lowTempP = document.getElementById("forecast-" + (i+1).toString() + "-low");
        iconImg = document.getElementById("forecast-" + (i+1).toString() + "-img");

        highTempP.innerHTML = response.list[i].main.temp_max;
        lowTempP.innerHTML = response.list[i].main.temp_min;
        iconImg.src = `https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png`;
    } 
})

/* <p>Temperature: <span id="temp"></span>°</p>
<p>Wind Speed: <span id="windSpeed"></span>mph</p>
// <p>Windchill: <span id="windchill"></span></p> */



