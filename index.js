const d = document

const form = d.getElementById('form')
const username = d.getElementById('username')
const email = d.getElementById('email')
const phone = d.getElementById('phone')
const password = d.getElementById('password')
const cpassword = d.getElementById('cpassword')


//

function validateForm() {

    // username validation
    if (username.value.trim() === "") {
        username.parentElement.querySelector('small').innerText = "cannot be blank"
        username.parentElement.querySelector('.exclamation').style.visibility = "visible"
    }
    else if (username.value.length < 3) {
        username.parentElement.querySelector('small').innerText = "min 3 characters"
        username.parentElement.querySelector('.exclamation').style.visibility = "visible"
    }

    else {
        username.parentElement.querySelector('small').innerText = ""
        username.parentElement.querySelector('.check').style.visibility = "visible"
        username.parentElement.querySelector('.exclamation').style.visibility = "hidden"
    }


    // EMAIL validation

    // }
    if (email.value.trim() === "") {
        username.parentElement.querySelector('small').innerText = "cannot be blank"
        username.parentElement.querySelector('.exclamation').style.visibility = "visible"
    }
    else if (username.value.length < 3) {
        username.parentElement.querySelector('small').innerText = "min 3 characters"
        username.parentElement.querySelector('.exclamation').style.visibility = "visible"
    }
    else {
        username.parentElement.querySelector('small').innerText = ""
        username.parentElement.querySelector('.check').style.visibility = "visible"
        username.parentElement.querySelector('.exclamation').style.visibility = "hidden"
    }


    // phone number validation

    if (phone.value.length === 0) {
        phone.parentElement.querySelector('small').innerText = "cannot be blank"
        phone.parentElement.querySelector('.exclamation').style.visibility = "visible"
    }
    else if (phone.value.length != 10) {
        phone.parentElement.querySelector('small').innerText = "it should be 10 digits"
        phone.parentElement.querySelector('.exclamation').style.visibility = "visible"
    }
    else {
        phone.parentElement.querySelector('small').innerText = ""
        phone.parentElement.querySelector('.check').style.visibility = "visible"
        phone.parentElement.querySelector('.exclamation').style.visibility = "hidden"
    }

    // password validation
    let specialCharacter = ["@", "#", "$", "&"]
    if (password.value === "") {
        password.parentElement.querySelector('small').innerText = "cannot be blank"
        password.parentElement.querySelector('.exclamation').style.visibility = "visible"
    }
    else if (password.value.length < 5) {
        password.parentElement.querySelector('small').innerText = "weak"
        password.parentElement.querySelector('.exclamation').style.visibility = "visible"
    }
    else if (password.value.length < 8) {
        password.parentElement.querySelector('small').innerText = "moderate"
        password.parentElement.querySelector('.exclamation').style.visibility = "visible"
    }
    else {
        password.parentElement.querySelector('small').innerText = ""
        password.parentElement.querySelector('.check').style.visibility = "visible"
        password.parentElement.querySelector('.exclamation').style.visibility = "hidden"
    }


    // confirm password
    if (cpassword.value === "") {
        cpassword.parentElement.querySelector('small').innerText = "cannot be blank"
        cpassword.parentElement.querySelector('.exclamation').style.visibility = "visible"
    }
    else if (cpassword.value != password.value) {
        cpassword.parentElement.querySelector('small').innerText = ""
        cpassword.parentElement.querySelector('.exclamation').style.visibility = "visible"
    }
    else {
        cpassword.parentElement.querySelector('small').innerText = ""
        cpassword.parentElement.querySelector('.exclamation').style.visibility = "hidden"
        cpassword.parentElement.querySelector('.check').style.visibility = "visible"
    }

    return false
    // for next page
    // return location.assign("https://www.youtube.com/")


}







// const form = d.getElementById('form')
// const username = d.getElementById('username')
// const eamil = d.getElementById('eamil')
// const phone = d.getElementById('phone')
// const password = d.getElementById('password')
// const cpassword = d.getElementById('cpassword')

// // add event
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     validate();
// })

// // adding more validation in email
// // const isEmail = (emailVal) => {
// //     let atSymbol = emailVal.indexOf("@")
// //     if (atSymbol < 1) return false;
// //     var dot = eamilVal.lastIndexOf('.');
// //     if (dot <= atSymbol + 2) return false;
// //     if (dot === emailVal.length - 1) return false
// //     return true
// // }


// // difining validate function
// const validate = () => {
//     const usernameVal = username.Value.trim()
//     const emailVal = eamil.Value.trim()
//     const phoneVal = phone.Value.trim()
//     const passwordVal = password.Value.trim()
//     const cpasswordVal = cpassword.Value.trim()

//     // validate username
//     if (usernameVal === "") {
//         setErrorMsg(username, 'username cannot be blank')
//     }
//     else if (usernameVal.length < 3) {
//         setErrorMsg(username, 'username min 3 char')
//     }
//     else {
//         setSuccsessMsg(username)
//     }

//     // validate email
//     if (emailVal === "") {
//         setErrorMsg(email, 'email cannot be blank')
//     }
//     else if (!isEmail(emailVal)) {
//         setErrorMsg(emailVal, 'Not a valid email')
//     }
//     else {
//         setSuccsessMsg(email)
//     }
// }

// function setErrorMsg(input, errormsgs) {
//     const formcontrol = input.parentElement;
//     const small = formcontrol.querySelector("small")
//     formcontrol.className = "form-control error"
//     small.innerText = errormsgs
// }