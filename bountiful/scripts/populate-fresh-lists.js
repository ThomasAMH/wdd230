
//Get options from the .json file and assign them to the lists

    fetch("../data/fruits.json")
    .then(data => {return data.json();})
    .then(response => {
        let fruitDropdownOne = document.getElementById("fresh-form-fruit-one");
        let fruitDropdownTwo = document.getElementById("fresh-form-fruit-two");
        let fruitDropdownThree = document.getElementById("fresh-form-fruit-three");
        let temp1, temp2, temp3 = null;

        response.fruits.forEach(element => {
            
            temp1 = document.createElement("option");
            temp1.setAttribute("value", element.name);
            temp1.innerHTML = element.name;

            temp2 = document.createElement("option");
            temp2.setAttribute("value", element.name);
            temp2.innerHTML = element.name;

            temp3 = document.createElement("option");
            temp3.setAttribute("value", element.name);
            temp3.innerHTML = element.name;
            
            fruitDropdownOne.appendChild(temp1);
            fruitDropdownTwo.appendChild(temp2);
            fruitDropdownThree.appendChild(temp3);
        });
    })
