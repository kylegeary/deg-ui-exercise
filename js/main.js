const zipCode = document.getElementById("zipCodeField").value;
const parsedZipCode = parseInt(zipCode);
function validateZipCode () {
    if (parsedZipCode.length === 5 && isNaN(parsedZipCode) == false) {
        console.log("you\'re good.");
    } else {
        console.log("That's not a number, yo.")
    }
}