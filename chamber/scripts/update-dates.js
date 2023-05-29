//Update today is 
let d = new Date();

let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
}

document.getElementById("todays-date").textContent += `${d.toLocaleDateString("en-US", options)}`

//Update Copyright
document.getElementById("copyright").innerHTML = `&#169; ${d.getFullYear()}`;

//Update last modified
d = new Date(document.lastModified);
options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
}
document.getElementById("last-modified").textContent += `${d.toLocaleDateString("en-US", options)}`

