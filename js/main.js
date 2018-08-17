
const zipCodeInput = document.getElementById("zipCodeField");
zipCodeInput.addEventListener('keydown', function (event) {
    if (event.code == "Enter") {
        validateZipCode();
    }
});


function validateZipCode() {
    let zipCode = document.getElementById("zipCodeField").value;
    let valid = /^[0-9]{5}?$/.test(zipCode);
    if (valid){
        alert("Okay, we're cool.")
    } else {
        alert("Get your shit together, bro.")

    }
}