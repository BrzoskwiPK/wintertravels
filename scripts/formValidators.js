var nameRegexp = /^[A-Z]{1}[a-z]+$/;
var emailRegexp = /^[a-zA-Z\.]*[@][a-zA-Z\.]*[\.][a-zA-Z]{2,3}$/;
var phoneNoRegexp = /^\d{9}/;
            
const validateName = () => {
    const nameValue = document.querySelector('#nazwisko').value;

    if (!nameRegexp.test(nameValue)) {
        alert("ŹLE WPISANO IMIĘ!");
        nameValue = null;
    }
}

const validateEmail = () => {
    const emailValue = document.querySelector('#mail').value;

    if (!emailRegexp.test(emailValue)) {
        alert("ŹLE WPISANO E-MAIL!");
        emailValue = null;
    }
}

const validatePhoneNo = () => {
    const phoneNoValue = document.querySelector('#telefon').value;

    if (!phoneNoRegexp.test(phoneNoValue)) {
        alert("ŹLE WPISANO TELEFON!");
        phoneNoValue = null;
    }
}