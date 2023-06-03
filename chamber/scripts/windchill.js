/* <p>Temperature: <span id="temp"></span>°</p>
<p>Wind Speed: <span id="windSpeed"></span>mph</p>
// <p>Windchill: <span id="windchill"></span></p> */

const tempVal = document.getElementById("temp").innerText;
const windSpeedVal = document.getElementById("windSpeed").innerText;
const windchillElement = document.getElementById("windchill");

//Calculate windchill, if conditions are met 

if(tempVal >= 50 || windSpeedVal < 3) {
    windchillElement.innerText = "N/A";
} else {
    windchillElement.innerText = Math.round(35.74 + (0.6215 * tempVal) - (35.75 * windSpeedVal**0.16) + (0.4275 * tempVal * windSpeedVal**0.16)) + "° F";
}

