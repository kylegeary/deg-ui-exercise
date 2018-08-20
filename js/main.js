
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
    getDoctors();
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
    getDoctors();
}

const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener("input", function (event) {

    var data = new FormData(form);
    for (const entry of data) {
        output = entry[1] + "\r";
    };
    event.preventDefault();
    getDoctors();
}, false);

/*
function displayResults() {
    let resultAmount = ;
    let resultAmountText = document.getElementById("resultAmountText");

    resultAmountText.innerText = "Total Results: " + ;
}
*/


function getDoctors() {
    let json = {
        "results": [
            {
                "fullName": "Nick Andrew Mandela",
                "lastName": "Mandela",
                "specialties": [
                    "Vein Care Again",
                    "Neurology"
                ],
                "url": "#",
                "image": "../assets/avatar.png",
                "gender": "Male",
                "bio": "",
                "locations": [
                    {
                        "name": "St Louis",
                        "url": "https://www.google.com",
                        "streetAddress": null,
                        "cityStateZip": null,
                        "lat": 0,
                        "lng": 0,
                        "distance": 0.8122855139943341,
                        "phone": null,
                        "image": null,
                        "availability": null
                    },
                    {
                        "name": "Olathe",
                        "url": "https://www.google.com",
                        "streetAddress": null,
                        "cityStateZip": null,
                        "lat": 0,
                        "lng": 0,
                        "distance": 23.1210731921023,
                        "phone": null,
                        "image": null,
                        "availability": null
                    },
                    {
                        "name": "Vein Care Center",
                        "url": "https://www.google.com",
                        "streetAddress": null,
                        "cityStateZip": null,
                        "lat": 0,
                        "lng": 0,
                        "distance": 12.59373900731615,
                        "phone": null,
                        "image": null,
                        "availability": null
                    }
                ]
            },
            {
                "fullName": "Dr. Ryan Heap",
                "lastName": "Heap",
                "specialties": [
                    "Vein Care Again",
                    "Neurology"
                ],
                "url": "#",
                "image": "../assets/drheap.jpg",
                "gender": "Male",
                "bio": "Dr. Ryan \"Doogie\" Heap is the son of Ronnie (Harrison Ford) and JoJo Heap (Linda Hamilton). As a child, he twice survived early-stage pediatric leukemia after his father—a family physician—discovered suspicious bruising. The experience contributed to the younger Heap's desire to enter medicine.",
                "locations": [
                    {
                        "name": "St Louis",
                        "url": "https://www.google.com",
                        "streetAddress": null,
                        "cityStateZip": null,
                        "lat": 0,
                        "lng": 0,
                        "distance": 5.22855139943341,
                        "phone": null,
                        "image": null,
                        "availability": null
                    },
                    {
                        "name": "Olathe",
                        "url": "https://www.google.com",
                        "streetAddress": null,
                        "cityStateZip": null,
                        "lat": 0,
                        "lng": 0,
                        "distance": 15.1210731921023,
                        "phone": null,
                        "image": null,
                        "availability": null
                    },
                    {
                        "name": "Vein Care Center",
                        "url": "https://www.google.com",
                        "streetAddress": null,
                        "cityStateZip": null,
                        "lat": 0,
                        "lng": 0,
                        "distance": 8.59373900731615,
                        "phone": null,
                        "image": null,
                        "availability": null
                    }
                ]
            },
            {
                "fullName": "Dr. Jan Smith",
                "lastName": "Smith",
                "specialties": [],
                "url": "#",
                "image": "../assets/avatar.png",
                "gender": "Female",
                "bio": "",
                "locations": [
                    {
                        "name": "Olathe",
                        "url": "https://www.google.com",
                        "streetAddress": null,
                        "cityStateZip": null,
                        "lat": 0,
                        "lng": 0,
                        "distance": 32.1210731921023,
                        "phone": null,
                        "image": null,
                        "availability": null
                    }
                ]
            },
            {
                "fullName": "John A Doe",
                "lastName": "Doe",
                "specialties": [],
                "languages": [
                    "English"
                ],
                "url": "#",
                "image": "../assets/avatar.png",
                "gender": null,
                "bio": "",
                "locations": [
                    {
                        "name": "Olathe",
                        "url": "https://www.google.com",
                        "streetAddress": null,
                        "cityStateZip": null,
                        "lat": 0,
                        "lng": 0,
                        "distance": 12.1210731921023,
                        "phone": null,
                        "image": null,
                        "availability": null
                    }
                ]
            },
            {
                "fullName": "John D Test",
                "lastName": "Test",
                "specialties": [],
                "url": "#",
                "image": null,
                "gender": null,
                "bio": "",
                "locations": [
                    {
                        "name": "Olathe",
                        "url": "https://www.google.com",
                        "streetAddress": null,
                        "cityStateZip": null,
                        "lat": 0,
                        "lng": 0,
                        "distance": 3.1210731921023,
                        "phone": null,
                        "image": null,
                        "availability": null
                    }
                ]
            },
            {
                "fullName": "Alison T Test",
                "lastName": "Test",
                "specialties": [
                    "Vein Care Again",
                    "Neurology"
                ],
                "url": "#",
                "image": "../assets/avatar.png",
                "gender": "Female",
                "bio": "",
                "locations": [
                    {
                        "name": "Olathe",
                        "url": "https://www.google.com",
                        "streetAddress": null,
                        "cityStateZip": null,
                        "lat": 0,
                        "lng": 0,
                        "distance": 1.1210731921023,
                        "phone": null,
                        "image": null,
                        "availability": null
                    },
                    {
                        "name": "Vein Care Center",
                        "url": "https://www.google.com",
                        "streetAddress": null,
                        "cityStateZip": null,
                        "lat": 0,
                        "lng": 0,
                        "distance": 12.59373900731615,
                        "phone": null,
                        "image": null,
                        "availability": null
                    }
                ]
            },
            {
                "fullName": "Test A Test",
                "lastName": "Test",
                "specialties": [
                    "Neurology"
                ],
                "url": "#",
                "image": "../assets/avatar.png",
                "gender": "Female",
                "bio": "",
                "locations": [
                    {
                        "name": "Olathe",
                        "url": "https://www.google.com",
                        "streetAddress": null,
                        "cityStateZip": null,
                        "lat": 0,
                        "lng": 0,
                        "distance": 22.1210731921023,
                        "phone": null,
                        "image": null,
                        "availability": null
                    },
                    {
                        "name": "Lenexa",
                        "url": "https://www.google.com",
                        "streetAddress": null,
                        "cityStateZip": null,
                        "lat": 0,
                        "lng": 0,
                        "distance": 16.92244050719052,
                        "phone": null,
                        "image": null,
                        "availability": null
                    }
                ]
            }
        ]
    };
    let range = document.getElementById("mileRange").value;
    let gender = document.querySelector('input[name = "gender"]:checked').value;
    let returned = json.results;
    if (range < 30) {
        returned = returned.filter(i => { return i.locations.find(l => l.distance <= range) != undefined; });
    }
    if(gender) {
        returned = returned.filter(i => i.gender && i.gender == gender);
    }
    document.getElementById("resultAmountText").innerText = "Total Results: " + returned.length;
    let doctorsList = "";
    returned.forEach(c => {
        let specialties = "";
        c.specialties.forEach(s => {
            specialties += "<li>" + s + "</li>";
        })
        doctorsList += "<li>" + c.fullName + ", " + "<ul>" + specialties + "</ul> ," + "</li>"
    });
    document.getElementById("doctors").innerHTML = doctorsList;
    console.log(returned);
};