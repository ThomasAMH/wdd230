const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");
button.addEventListener("click", () => {
    if (input.value != "") {
        const li = document.createElement("li");
        const delButton = document.createElement("button");
        li.textContent = input.value;

        delButton.type = "submit"
        delButton.textContent = "❌";
        delButton.addEventListener("click", () => {
            list.removeChild(li)
        });
        li.appendChild(delButton)
        list.appendChild(li)
    }
    input.value = "";
    input.focus();
}
)
