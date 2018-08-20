
const zipCodeInput = document.getElementById("zipCodeField");
zipCodeInput.addEventListener('keydown', function (event) {
    if (event.code == "Enter") {
        validateZipCode();
    }
});

const range = document.getElementById("mileRange");
range.addEventListener("input", function (event) {
    event.preventDefault;
    displayDistance();
})


function validateZipCode() {
    let zipCode = document.getElementById("zipCodeField").value;
    let displayDistance = document.getElementById("distanceFromZip");
    let range = document.getElementById("mileRange").value;
    let valid = /^[0-9]{5}?$/.test(zipCode);
    if (valid){
        if (range == 30) {
            displayDistance.innerText = "CURRENT: ALL MILES FROM " + zipCode;
        } else {
            displayDistance.innerText = "CURRENT: " + range + " MILES FROM " + zipCode;
        }
    } else {
        displayDistance.innerText = "";
    }
}

function displayDistance() {
    let zipCode = document.getElementById("zipCodeField").value;
    let range = document.getElementById("mileRange").value;
    let displayDistance = document.getElementById("distanceFromZip");
    let valid = /^[0-9]{5}?$/.test(zipCode);
    if (valid) {
        if (range == 30) {
            displayDistance.innerText = "CURRENT: ALL MILES FROM " + zipCode;
        } else {
            displayDistance.innerText = "CURRENT: " + range + " MILES FROM " + zipCode;
        }
    } else {
    displayDistance.innerText = "";
    }
}

const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener("input", function (event) {

    var data = new FormData(form);
    var output = "";
    for (const entry of data) {
        output = entry[1] + "\r";
    };
    event.preventDefault();
}, false);

/*
function displayResults() {
    let resultAmount = ;
    let resultAmountText = document.getElementById("resultAmountText");

    resultAmountText.innerText = "Total Results: " + ;
}
*/