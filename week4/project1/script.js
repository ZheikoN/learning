

function init() {

    let listOfCities = ['Dublin', 'Cork', 'Limerick', 'Killarney'];
    const htmlContent = renderCitiesAsHTML(listOfCities);
    renderCityListing(htmlContent);

    renderCitySelectList(listOfCities)

    setSelectedCity(listOfCities[0]);

    console.log(htmlContent);
}

function addCity() {
    // grab the contents of the add city field
    const selectedInput = document.querySelector("#tbAddCity");
    const addCityItem = selectedInput.value;


    // push the item onto the end of selct box
    const selectedObject = document.querySelector('#selectListOfCities');
    let option = document.createElement("option");
    option.text = addCityItem;
    selectedObject.add(option, null);

    // clear add city field
    selectedInput.value = '';

    let cities = [];
    for (let i = 0; i < selectedObject.options.length; i++) {

        cities.push(selectedObject.options[i].text);

    }

    const htmlContent = renderCitiesAsHTML(cities);
    renderCityListing(htmlContent);

}

function resetCityListing() {
    const selectedObject = document.querySelector('#selectListOfCities');

    selectedObject.length = 0;
}

function onCityChange(e) {
    const currentIndex = e.selectedIndex;
    const currentValue = e.value;
    const currentText = e.options[currentIndex].text;
    console.log(`city has changed: ${currentIndex}`);
    console.log(`city has changed to: ${currentValue}`);
    console.log(`city has changed to: ${currentText}`);








}

function setSelectedCity(city) {

    const selectedObject = document.querySelector('#selectedCity');
    selectedObject.value = city;
}

function renderCityListing(htmlContent) {

    const selectedHTMLObject = document.querySelector('#listGroup');
    selectedHTMLObject.innerHTML = htmlContent;
}


function renderCitySelectList(listOfCities) {

    const selectedObject = document.querySelector('#selectListOfCities');

    selectedObject.length = 0;

    listOfCities.forEach((city, index) => {

        let option = document.createElement("option");
        option.value = index;
        option.text = city;
        selectedObject.add(option, null);

    })



}

function renderCitiesAsHTML(listOfCities) {

    let htmlContent = [];

    htmlContent.push(`<ul class="list-group">`);
    listOfCities.forEach((city, index) => {

        htmlContent.push(`<li class="list-group-item">${index} - ${city}</li>`);
    });
    htmlContent.push(`</ul>`);

    return htmlContent.join(" ");
}