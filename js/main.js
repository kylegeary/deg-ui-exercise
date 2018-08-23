/*Checks for 'enter' keydown after typing in zip. The search button also accepts a onClick event (see in HTML). If the event is triggered, then it calls a function to validate the zip code*/
const zipCodeInput = document.getElementById("zipCodeField");
zipCodeInput.addEventListener('keydown', function (event) {
    if (event.code == "Enter" || event.code == "NumpadEnter") {
        validateZipCode();
    }
});

const range = document.getElementById("mileRange");
range.addEventListener("input", function (event) {
    event.preventDefault;
    displayDistance()
        ;
})

/*validates zip code with regex and displays 'x miles from zip'. If the zip is not valid, then it hides some of the divs.*/
function validateZipCode() {
    let zipCode = document.querySelector("#zipCodeField").value;
    let displayDistance = document.querySelector("#distanceFromZip");
    let range = document.querySelector("#mileRange").value;
    let valid = /^[0-9]{5}?$/.test(zipCode);
    let resultAmountText = document.querySelector("#resultAmountText");
    let results = document.querySelector(".results");
    if (valid && range == 30) {
        displayDistance.innerText = "CURRENT: ALL MILES FROM " + zipCode;
        document.querySelector('.subContainer').style.visibility = "visible";
        results.style.display = "block";
        resultAmountText.style.display = "block";
    } else if (valid && range < 30) {
        displayDistance.innerText = "CURRENT: " + range + " MILES FROM " + zipCode;
        document.querySelector('.subContainer').style.visibility = "visible";
        results.style.display = "block";
        resultAmountText.style.display = "block";
    } else {
        displayDistance.innerText = "";
        results.style.display = "none";
        resultAmountText.style.display = "none";
    }
    getDoctors();
}

function displayDistance() {
    let zipCode = document.querySelector("#zipCodeField").value;
    let range = document.querySelector("#mileRange").value;
    let displayDistance = document.querySelector("#distanceFromZip");
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
    getDoctors();
}

/*Filters JSON, adds content to HTML based on filters*/
function getDoctors() {
    fetch("doctors.json").then(function (response) {
        return response.json();
    }).then(function (json) {
        let range = document.querySelector("#mileRange").value;
        let gender = document.querySelector("input[name = 'gender']:checked").value;
        let returned = json.results;
        if (range < 30) {
            returned = returned.filter(i => { return i.locations.find(l => l.distance <= range) != undefined; });
        }
        if (gender) {
            returned = returned.filter(i => i.gender && i.gender == gender);
        }
        document.getElementById("resultAmountText").innerText = "Total Results: " + returned.length;
        let doctorsList = "";

        returned.forEach(c => {
            let specialties = "";
            c.specialties.forEach(s => {
                specialties += "<li class=\"specialties\">" + s + "</li>";
            })
            let locations = "";
            c.locations.forEach(l => {
                locations += "<a href=\"" + l.url + "\">" + l.name + "</a><br>" + l.distance.toFixed(0) + " miles <br>";
            })
            doctorsList += "<div class=\"doctorCard\"><ul class=\"doctorImages\"><li><img class=\"doctorImage\" src=\"" + c.image + "\"></li></ul><ul class=\"profileInfo\"><li class=\"fullName\">" + c.fullName + "<li><br>" + specialties + "</ul><br><ul class=\"locators\">" + locations + "</ul><br></div><hr>"
        })
        document.querySelector("#doctors").innerHTML = doctorsList;
    });
};