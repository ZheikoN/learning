let listOfCities = ['Dublin', 'Cork', 'Limerick', 'Killarney'];

function init() {

    const htmlContent = renderCitiesAsHTML();
    renderCityListing(htmlContent);

    renderCitySelectList(listOfCities)

    setSelectedCity(listOfCities[0]);

    console.log(htmlContent);
}

function onCityChange(e) {
    const currentIndex = e.selectedIndex;
    const currentValue = e.value;
    const currentText = e.options[currentIndex].text;
    console.log(`city has changed: ${currentIndex}`);
    console.log(`city has changed to: ${currentValue}`);
    console.log(`city has changed to: ${currentText}`);

    setSelectedCity(currentText);

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

function renderCitiesAsHTML() {

    let htmlContent = [];

    htmlContent.push(`<ul class="list-group">`);
    listOfCities.forEach((city, index) => {

        htmlContent.push(`<li class="list-group-item">${index} - ${city}</li>`);
    });
    htmlContent.push(`</ul>`);

    return htmlContent.join(" ");
}