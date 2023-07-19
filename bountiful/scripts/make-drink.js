//Add event listener to button
document.getElementById("fresh-form-prepare-drink-button").onclick = async function() {
    
    let fruitDropdownOneValue = document.getElementById("fresh-form-fruit-one").value;
    let fruitDropdownTwoValue = document.getElementById("fresh-form-fruit-two").value;
    let fruitDropdownThreeValue = document.getElementById("fresh-form-fruit-three").value;

    //Update information based on form
    document.getElementById("fresh-nutrition-facts-first-name").innerHTML = document.getElementById("fresh-form-first-name").value;
    let list = document.getElementById("fresh-ingredients-ul");
    let n = document.createElement("li")
    n.innerHTML = fruitDropdownOneValue;
    list.append(n);

    n = document.createElement("li")
    n.innerHTML = fruitDropdownTwoValue;
    list.append(n);
    
    n = document.createElement("li")
    n.innerHTML = fruitDropdownThreeValue;
    list.append(n);
    
    
    let fruitResponse = await fetch("../data/fruits.json");
    let fruitJson = await fruitResponse.json();
    let fruitNamesArray = Array.from(fruitJson.fruits, x => x.name);

    
    let caloriesSpan = document.getElementById("fresh-nutrition-facts-calories");
    let totalFatSpan = document.getElementById("fresh-nutrition-facts-total-fat");
    let cholesterolSpan = document.getElementById("fresh-nutrition-facts-cholesterol");
    let sodiumSpan = document.getElementById("fresh-nutrition-facts-sodium");
    let totalCarbSpan = document.getElementById("fresh-nutrition-facts-total-carbohydrate");
    let dietaryFiberSpan = document.getElementById("fresh-nutrition-facts-dietary-fiber");
    let totalSugarSpan = document.getElementById("fresh-nutrition-facts-total-sugar");
    let proteinSpan = document.getElementById("fresh-nutrition-facts-protein");
    let vitCSpan = document.getElementById("fresh-nutrition-facts-vitamin-c");
    let vitDSpan = document.getElementById("fresh-nutrition-facts-vitamin-d");
    let potassiumSpan = document.getElementById("fresh-nutrition-facts-potassium");
    let ironSpan = document.getElementById("fresh-nutrition-facts-iron");
    let calciumSpan = document.getElementById("fresh-nutrition-facts-calcium");
    
    let nutritionResponse = await fetch("../data/nutrition-units.json");
    let nutritionUnits = await nutritionResponse.json();

    let caloriesVal = parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownOneValue)].main_info[0].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownTwoValue)].main_info[0].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownThreeValue)].main_info[0].property_value);

    let totalFatVal = parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownOneValue)].main_info[1].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownTwoValue)].main_info[1].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownThreeValue)].main_info[1].property_value);

    let cholesterolVal = parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownOneValue)].main_info[2].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownTwoValue)].main_info[2].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownThreeValue)].main_info[2].property_value);

    let sodiumVal = parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownOneValue)].main_info[3].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownTwoValue)].main_info[3].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownThreeValue)].main_info[3].property_value);

    let totalCarbVal = parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownOneValue)].main_info[4].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownTwoValue)].main_info[4].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownThreeValue)].main_info[4].property_value);

    let dietaryFiberVal = parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownOneValue)].main_info[5].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownTwoValue)].main_info[5].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownThreeValue)].main_info[5].property_value);

    let totalSugarVal = parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownOneValue)].main_info[6].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownTwoValue)].main_info[6].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownThreeValue)].main_info[6].property_value);

    let proteinVal = parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownOneValue)].main_info[7].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownTwoValue)].main_info[7].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownThreeValue)].main_info[7].property_value);
    
    let vitCVal = parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownOneValue)].secondary_info[0].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownTwoValue)].secondary_info[0].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownThreeValue)].secondary_info[0].property_value);
    
    let vitDVal = parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownOneValue)].secondary_info[1].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownTwoValue)].secondary_info[1].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownThreeValue)].secondary_info[1].property_value);

    let potassiumVal = parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownOneValue)].secondary_info[2].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownTwoValue)].secondary_info[2].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownThreeValue)].secondary_info[2].property_value);
    
    let ironVal = parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownOneValue)].secondary_info[3].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownTwoValue)].secondary_info[3].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownThreeValue)].secondary_info[3].property_value);

    let calciumVal = parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownOneValue)].secondary_info[4].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownTwoValue)].secondary_info[4].property_value)
    + parseFloat(fruitJson.fruits[fruitNamesArray.indexOf(fruitDropdownThreeValue)].secondary_info[4].property_value);
    
    //Apply units and add to document
    caloriesSpan.innerHTML = caloriesVal.toFixed(1).toString();
    totalFatSpan.innerHTML = totalFatVal.toFixed(1).toString() + "" + nutritionUnits.Total_Fat;
    cholesterolSpan.innerHTML = cholesterolVal.toFixed(1).toString() + "" + nutritionUnits.Cholesterol;
    sodiumSpan.innerHTML = sodiumVal.toFixed(1).toString() + "" + nutritionUnits.Sodium;
    totalCarbSpan.innerHTML = totalCarbVal.toFixed(1).toString() + "" + nutritionUnits.Total_Carbohydrate;
    dietaryFiberSpan.innerHTML = dietaryFiberVal.toFixed(1).toString() + "" + nutritionUnits.Dietary_Fiber;
    totalSugarSpan.innerHTML = totalSugarVal.toFixed(1).toString() + "" + nutritionUnits.Total_Sugar;
    proteinSpan.innerHTML = proteinVal.toFixed(1).toString() + "" + nutritionUnits.Protein;
    vitCSpan.innerHTML = vitCVal.toFixed(1).toString() + "" + nutritionUnits.Vitamin_C;
    vitDSpan.innerHTML = vitDVal.toFixed(1).toString() + "" + nutritionUnits.Vitamin_D;
    potassiumSpan.innerHTML = potassiumVal.toFixed(1).toString() + "" + nutritionUnits.Potassium;
    ironSpan.innerHTML = ironVal.toFixed(1).toString() + "" + nutritionUnits.Iron;
    calciumSpan.innerHTML = calciumVal.toFixed(1).toString() + "" + nutritionUnits.Calcium;

    //Toggle nutriction facts style
    document.getElementsByClassName("fresh-form-results-wrapper")[0].style.display = "flex";
    document.getElementById("fresh-form-refresh-page-button").style.display = "block";
    document.getElementById("fresh-form-prepare-drink-button").style.display = "none";

    //Update browser drink counter
    if (localStorage.getItem("drinkCounter") === null) {
        localStorage.setItem("drinkCounter", "1");
    } 
    else {
        let i = parseInt(localStorage.getItem("drinkCounter"));
        i = i + 1;
        localStorage.setItem("drinkCounter", i.toString());
    }
    console.log(localStorage.getItem("drinkCounter"));
    };