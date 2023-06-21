// The purpose of this script is to load the data from a JSON file into the directory page.

// Load the JSON file

let url = "./data/data.json";
getJSONData(url);

async function getJSONData(url) {
    const reponse = await fetch(url);
    const jsonData = await reponse.json();
    displaybusiness(jsonData);
}


/**
 * Loop through every business in the Array and create an
 * HTML card
 * @param {Array} array of businesses
 */
function displaybusiness(directoryData) {
    // select the output container element
    const cards = document.querySelector("directory-wrapper"); 
    // loop
    directoryData.businesses.forEach((business) => {
        // create elements to add to the div.cards element
        let card = document.createElement('div');
        let companyName = document.createElement('h2');
        let est = document.createElement('em');
        let typeOfBusiness = document.createElement("p");
        let companyLogo = document.createElement('img');
        let url = document.createElement('a');
        let contactList = document.createElement("ul");
        let address = document.createElement('li');
        let contactPerson = document.createElement('li');
        let phoneNumber = document.createElement('li');

        // Add card styles
        card.setAttribute("class", "card");
        companyName.textContent = business.name;
        est.textContent = `Est: ${business.EstIn}`;
        typeOfBusiness.textContent = `Business Type: ${business.businessType}`;
              
        companyLogo.setAttribute('src', business.image);
        companyLogo.setAttribute('alt', `${business.name}'s logo`);
        companyLogo.setAttribute('loading', 'lazy');

        url.setAttribute("href", business.url);
        url.textContent = "link to website";   

        address.textContent = `Business Address: ${business.address}`;
        contactPerson.textContent = `Contact Person: ${business.contactPerson}`;
        phoneNumber.textContent = `Phone: ${business.phonenumber}`;

        // Append the card body with the created elements
        contactList.appendChild(address);
        contactList.appendChild(contactPerson);
        contactList.appendChild(phoneNumber);

        card.appendChild(companyName);
        card.appendChild(est);
        card.appendChild(typeOfBusiness);
        card.appendChild(companyLogo);
        card.appendChild(url);
        card.appendChild(contactList);

        document.getElementsByClassName("directory-wrapper")[0].appendChild(card);    
    });

}