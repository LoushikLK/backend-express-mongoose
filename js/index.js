


console.log("started");

let alert = document.getElementById("alert")
alert.style.display = "none"



let form = document.querySelector("form")

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let inputEmail = document.getElementById("inputEmail");
let inputAddress = document.getElementById("inputAddress");
let inputCity = document.getElementById("inputCity");
let inputPin = document.getElementById("inputPin");
let inputFile = document.getElementById("inputFile");
let textArea = document.getElementById("textArea");
let dailyStuff = document.getElementById("dailyStuff");
let techStuff = document.getElementById("techStuff");
let submitBtn = document.getElementById("submitBtn");

let codeLang = document.getElementById("codeLang")
let codeExperience = document.getElementById("codeExperience")

let techField = document.getElementById("tech")
techField.style.display = "none"

techStuff.addEventListener("click", showfield)

function showfield() {

    techField.style.display = "block"
    codeLang.value = ""

}
dailyStuff.addEventListener("click", removeTech)

function removeTech() {

    techField.style.display = "none"
    codeLang.value = "not a programmer"
    codeExperience.value = null

}
submitBtn.addEventListener("click", submitFn)


class companyStuff {
    constructor(firstname, lastName, email, address, city, pin, file, about, language, experience) {
        this.fname = firstname;
        this.lname = lastName;
        this.email = email;
        this.address = address;
        this.cityName = city;
        this.pinCode = pin;
        this.file = file;
        this.about = about;
        this.language = language;
        this.experienceInYears = experience
    }

}
function submitFn(e) {
    e.preventDefault();




    dailycompanystuffs = new companyStuff(firstName.value, lastName.value, inputEmail.value, inputAddress.value, inputCity.value, inputPin.value, inputFile.value, textArea.value, codeLang.value, codeExperience.value)
    let data = JSON.stringify(dailycompanystuffs);
    console.log(JSON.parse(data));
    let url = "/";
    let param = {
        method: 'POST',
        headers: {
            
            'Content-Type': 'application/json'
        }
        ,

        body: data
    }
    if (firstName.value && inputEmail.value && inputCity.value != "") {
        fetch(url, param).then(res => {
            res.json().then(result => {
                // console.log(result);
                // console.log(alert);
                alert.classList.add("alert-success")
                alert.innerText = "Your data has been saved sucessfully"
                alert.style.display = "block"
            })

        })
    } else {
        alert.classList.add("alert-danger")
        alert.style.display = "block"
        console.log("cant add form");

        throw Error()

    }


    form.reset()
    // location.reload()

}

