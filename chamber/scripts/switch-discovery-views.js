let button = document.getElementById("toggle-discovery-view");

button.addEventListener("click", (event => {    
    if(button.dataset.currentView === "tile") {
        let elements = document.getElementsByClassName("card-list");
        button.innerHTML="Switch to List View";
        button.dataset.currentView = "list";

        Array.from(elements).forEach(element => {
            element.className = "card-tile";            
        });
    }
    else {
        let elements = document.getElementsByClassName("card-tile");
        button.innerHTML="Switch to Tile View";
        button.dataset.currentView = "tile";

        Array.from(elements).forEach(element => {
            element.className = "card-list";            
        });
    }
}))