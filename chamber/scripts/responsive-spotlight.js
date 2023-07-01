// The purpose of this script is to load the data from a JSON file into the directory page.

// Load the JSON file

let url = "./data/data.json";



async function getJSONData(url) {
    let cardOne = document.getElementsByClassName("spotlight-1")[0];
    let cardTwo = document.getElementsByClassName("spotlight-2")[0];

    const reponse = await fetch(url);
    const jsonData = await reponse.json(); 
    let businessArray = [...jsonData.businesses];
    filteredBusinessArray = businessArray.filter(e => e.membershipLevel == "silver" || e.membershipLevel == "gold");

    let firstBusiness = filteredBusinessArray[Math.floor(Math.random() * (filteredBusinessArray.length))];
    let secondBusiness = filteredBusinessArray[Math.floor(Math.random() * (filteredBusinessArray.length))];

    if(firstBusiness == secondBusiness) {
        while(firstBusiness == secondBusiness) {
            secondBusiness = filteredBusinessArray[Math.floor(Math.random() * (filteredBusinessArray.length)-1)];
        }
    }
    
    //Set elements to first and second business
    let firstH3 = document.createElement("h3");
    let firstImg = document.createElement("img");
    let firstDescrip = document.createElement("p");

    let secondH3 = document.createElement("h3");
    let secondImg = document.createElement("img");
    let secondDescrip = document.createElement("p");

    firstH3.innerHTML = firstBusiness.name;

    firstImg.setAttribute('src', firstBusiness.image);
    firstImg.setAttribute('alt', `${firstBusiness.name}'s logo`);

    firstDescrip.innerHTML = document.createElement("p");
    firstDescrip.innerHTML = firstBusiness.businessType;

    secondH3.innerHTML = secondBusiness.name;

    secondImg.setAttribute('src', secondBusiness.image);
    secondImg.setAttribute('alt', `${secondBusiness.name}'s logo`);

    secondDescrip.innerHTML = document.createElement("p");
    secondDescrip.innerHTML = secondBusiness.businessType;

    cardOne.appendChild(firstH3);
    cardOne.appendChild(firstImg);
    cardOne.appendChild(firstDescrip);

    cardTwo.appendChild(secondH3);
    cardTwo.appendChild(secondImg);
    cardTwo.appendChild(secondDescrip);
}

getJSONData(url);