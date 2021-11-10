function init() {
    console.log("loading after document has loaded");
}

function btnSave() {
    localStorage.setItem("today", "wednesday");
    let favouriteFlavour = document.getElementById("tbFlavour").value;

    localStorage.setItem("flavour", favouriteFlavour)
}

function btnRetrieveFlavour() {

    const today = localStorage.getItem("today");

    const favouriteFlavour = localStorage.getItem("flavour");
  
    document.querySelector("#console").innerHTML = `today is ${today} and flavour is ${favouriteFlavour}`;

}
