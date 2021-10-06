
// function to initiate the script into loaded page
function init() {

    console.log(`I am loading after the page`);

    ShowGreeting();
    ShowDate();
}
let counter = 0;

// function to show greeting
function ShowGreeting() {

    let greetingElement = document.getElementById("greeting");
    greetingElement.innerHTML = 'Working with the DOM';
}
// function to show date
function ShowDate() {
    let currentDate = new Date();
    const longDate = currentDate.toString();
    const shortDate = currentDate.toDateString();

    console.log(`Long date is ${longDate}`);
    console.log(`short date is ${shortDate}`);

    let dateSpanObject = document.getElementById("currentDate");


    dateSpanObject.innerHTML = `<strong>${shortDate}</strong>`;

}
// function to increase counter by 1
function ClickButton() {
    let messagePanelDiv = document.getElementById("messagePanel");
    counter++;
    const message = `The value of Counter is now ${counter}`;
    messagePanelDiv.innerHTML = message;
    
}
// function to reset counter
function ResetCounter() {
    let messagePanelDiv = document.getElementById("messagePanel");
    counter = 0;
    
    messagePanelDiv.innerHTML = ``;
    
}

function ClearEmail() {

    let emailInput = document.getElementById("inputDemo");

    emailInput.value = ``;
}

function ResetEmail() {
    
    let emailInput = document.getElementById("inputDemo");

    if ( emailInput.value == ``) {
        emailInput.value = `Enter your email for newsletter`
    };
    

}