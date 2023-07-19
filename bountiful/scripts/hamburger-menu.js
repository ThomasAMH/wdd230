function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    if(document.getElementById("hamburgerBtn").innerHTML=="☰") {
        document.getElementById("hamburgerBtn").innerHTML="X"
    } else {
        document.getElementById("hamburgerBtn").innerHTML="☰"
    }
}

const hamburgerButton = document.getElementById("hamburgerBtn");
hamburgerButton.onclick = toggleMenu;
