
// // -------Login form-------
// var form = document.getElementById('profile__form');
// let form = document.querySelector(".login-form");

// const validationRules = {
//     email: {
//         testRegex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
//         message: "Email format is not correct format!"
//     },
//     password: {
//         testRegex: /^\S{8,}$/,
//         message: "Password length should be higher than 8 characters!"
//     },
//     firstName: {
//         testRegex: /^\S{2,}$/,
//         message: "First name should have at least 2 characters!"
//     },
//     lastName: {
//         testRegex: /^\S{2,}$/,
//         message: "Last name should have at least 2 characters!"
//     }
// }


// form.onsubmit = submitForm;

// function submitForm(event) {
//     // event.preventDefault();
    
//     // let formElements = event.target.elements;
//     // let formData = getFormData(event)
    
//     // getFieldsValidation(formData.login_email, formElements.login_email, validationRules.email)
//     // getFieldsValidation(formData.login_password, formElements.login_password, validationRules.password)
    
//     getFieldsValidation(formData.login_firstName, formElements.login_firstName, validationRules.firstName);
//     getFieldsValidation(formData.login_lastName, formElements.login_lastName, validationRules.lastName);
//     formData.login_passwordMatch === formData.login_password ? setSuccessFor(formElements.login_passwordMatch) : setErrorFor(formElements.login_passwordMatch, "Passwords do not match!");

//     authetication(event, formData.login_email, formData.login_password)    
// }

// function getFieldsValidation(value, element, validationRule) {
//     validationRule.testRegex.test(value) ? setSuccessFor(element) : setErrorFor(element, validationRule.message);
// }

// function getFormData(formSubmitEvent) {
//     let formData = new FormData(formSubmitEvent.target);
//     let formProps = Object.fromEntries(formData);
//     return formProps
// }

// function setSuccessFor(input) {
//     let selectElement = input.parentElement;
//     let selectClasses = selectElement.classList;
//     let displayErrorMessage = selectElement.querySelector("small");
//     displayErrorMessage.textContent = "";

//     selectClasses.remove("error");
//     selectClasses.add("success");
// }

// function setErrorFor(input, message) {
//     let selectElement = input.parentElement;
//     let selectClasses = selectElement.classList;
//     let displayErrorMessage = selectElement.querySelector("small");
//     displayErrorMessage.textContent  = message;

    
//     selectClasses.remove("success");
//     selectClasses.add("error");
// }

// function authetication(event, email, password) {
//     event.preventDefault();
    
//     if(email !== "" && password !== "") {
//         window.location.replace("/profile.html");
//     }
// }







// // -----------Register Form------------


// let form = document.querySelector(".login-form");

// const validationRules = {
//     firstName: {
//         testRegex: /^\S{2,}$/,
//         message: "First name should have at least 2 characters!"
//     },
//     lastName: {
//         testRegex: /^\S{2,}$/,
//         message: "Last name should have at least 2 characters!"
//     },
//     email: {
//         testRegex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
//         message: "Email format is not correct format!"
//     },
//     password: {
//         testRegex: /^\S{8,}$/,
//         message: "Password length should be higher than 8 characters!"
//     }
//     // passwordMatch: {
//     //     testRegex: "",
//     //     message: "Passwords do not match!"
//     // }
// };



// function submitForm(event) {
//     event.preventDefault();

//     let formElements = event.target.elements;
//     let formData = getFormData(event);

//     getFieldsValidation(formData.login_firstName, formElements.login_firstName, validationRules.firstName);
//     getFieldsValidation(formData.login_lastName, formElements.login_lastName, validationRules.lastName);
//     getFieldsValidation(formData.login_email, formElements.login_email, validationRules.email);
//     getFieldsValidation(formData.login_password, formElements.login_password, validationRules.password);
//     // getFieldsValidation(formData.login_passwordMatch, formElements.login_passwordMatch, validationRules.passwordMatch);
//     formData.login_passwordMatch === formData.login_password ? setSuccessFor(formElements.login_passwordMatch) : setErrorFor(formElements.login_passwordMatch, "Passwords do not match!");
    // window.location.replace("/profile.html");
// }

// function authetication(input) {
//     // console.log(input)
//     let allClassesToString = JSON.stringify(input);
    
//     // for(let i = 0; i < )
//     // const allFieldsCorrect = allClassesToString.jo

//     console.log(allClassesToString)
//     if(allClassesToString.includes("success")) {
//         window.location.replace("/profile.html");
//     }
   
// }



// function getFieldsValidation(value, element, validationRule) {
//     validationRule.testRegex.test(value) ? setSuccessFor(element) : setErrorFor(element, validationRule.message);
// }

// function setSuccessFor(input) {
//     let selectElement = input.parentElement;
//     let selectClasses = selectElement.classList;
//     let displayErrorMessage = selectElement.querySelector("small");
//     displayErrorMessage.textContent = "";

//     selectClasses.remove("error");
//     selectClasses.add("success");
// }
// function setErrorFor(input, message) {
//     let selectElement = input.parentElement;
//     let selectClasses = selectElement.classList;
//     let displayErrorMessage = selectElement.querySelector("small");
//     displayErrorMessage.textContent = message;

//     // console.log(displayErrorMessage.textContent)
//     selectClasses.remove("success");
//     selectClasses.add("error");
// }


// form.onsubmit = submitForm;


// --------Recover password modal---------


// let closeModal = document.querySelector("#closeModal");
// let generatePass = document.querySelector("#generatePass");

// closeModal.addEventListener("click", onCloseModal);
// generatePass.addEventListener("click", onGeneratePass);

// function onGeneratePass() {
//     document.querySelector("#modal-wrapper").style.visibility = "visible";
//     setTimeout(onCloseModal, 3000);
// }

// function onCloseModal() {
//     document.querySelector("#modal-wrapper").style.visibility = "hidden";
// }

// (function () {
//     let closeModal = document.querySelector("#closeModal");
//     let generatePass = document.querySelector("#generatePass");

//     closeModal.addEventListener("click", onCloseModal);
//     generatePass.addEventListener("click", onGeneratePass);

//     function onGeneratePass() {
//         document.querySelector("#modal-wrapper").style.visibility = "visible";
//         setTimeout(onCloseModal, 3000);
//     }

//     function onCloseModal() {
//         document.querySelector("#modal-wrapper").style.visibility = "hidden";
//     }
// })()




















// // ---------test stuff---------

// // function myFunction () {
// //     document.querySelector(".new").style.color = "red"
// // }
// // var aaa = "ceva";
// // // alert("ceva");
// // var colorInput = document.querySelector(".color");
// // colorInput.style.height = "40px";

// // var selectorInput = document.querySelector(".name");
// // selectorInput.style.height = "40px";

// // function getInputValue (inputElement) {
// //     if (inputElement && inputElement.value != "") {
// //         return inputElement.value;
// //     }
// //     return null;
// // }

// // function onChangeColor () {
// //     var color = getInputValue(colorInput) || "brown";
// //     var selector = getInputValue(selectorInput) || "h1";

// //     // document.querySelector(selector).style.color = color;
// //     document.querySelector(selector).innerText = color;
    
// //     // document.querySelector(selector) = color;
    

// // }

// // var button = document.querySelector("#start");
// // button.style.backgroundColor = "yellow";
// // button.onclick = onChangeColor;

// // function toggle() { 
// //     var element = document.querySelector('.new');
// //     var classes = element.classList;
// //     console.log('classes: ', classes)
// //     // console.log(classes)
// //     // console.log(element)
// //     if (classes.contains('pink')) {
// //         classes.add('purple');
// //         classes.remove('pink');
// //     } else {
// //         classes.remove('purple');
// //         classes.add('pink');
// //     }
// // }

// // document.querySelector("h1").onclick = toggle



