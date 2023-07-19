let d = new Date();
document.getElementById("copyright_info").innerHTML = `&#169; ${d.getFullYear()} - Thomas Montoya`;

d = new Date(document.lastModified);
const options = {
    month: "long",
    day: "numeric",
    year: "numeric"
}
document.getElementById("last_updated").textContent += `${d.toUTCString()}`