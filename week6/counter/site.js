let counter = 0;

function init() {
    console.log("loading after document has been loaded");
    WriteCounter(counter);
}

function btnPlus() {

    console.log("adding a counter");
    counter++;
    WriteCounter(counter);

}

function btnMinus() {
    console.log("removing a counter");
    counter--;
    WriteCounter(counter);

}

function WriteCounter(counter) {

    document.getElementById("counterResult").innerHTML = counter;
}