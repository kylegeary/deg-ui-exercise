
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
        alert("Okay, we're cool.")
        displayDistance.innerText = "Current: " + range + " miles from " + zipCode;
    } else {
        alert("Get your shit together, bro.")
        displayDistance.innerText = "";

    }
}

function displayDistance() {
    let zipCode = document.getElementById("zipCodeField").value;
    let range = document.getElementById("mileRange").value;
    let displayDistance = document.getElementById("distanceFromZip");
    let valid = /^[0-9]{5}?$/.test(zipCode);
    if (valid) {
        displayDistance.innerText = "Current: " + range + " miles from " + zipCode;
    } else {
    displayDistance.innerText = "";
    }
}