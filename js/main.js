let form = document.querySelector(".login-form");

const validationRules = {
    name: {
        testRegex: /[a-zA-Z]{4,}/,
        message: "Field cannot be empty!"
    },
    title: {
        testRegex: /[a-zA-Z]{2,}/,
        message: "Field cannot be empty!"
    },
    email: {
        testRegex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Email format is not correct format!"
    },
    bio: {
        testRegex: /[a-zA-Z]{10,}/,
        message: "Bio should have at least 10 characters!"
    },
    website: {
        testRegex: /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)$/,
        message: "The link should contain www"
    },
    twitter: {
        testRegex: /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)$/,
        message: "Twitter link is not complete"
    },
    facebook: {
        testRegex: /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)$/,
        message: "Facebook link is not complete"
    },
    linkedin: {
        testRegex: /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)$/,
        message: "Linkedin profile link is not complete"
    },
    firstName: {
        testRegex: /^\S{2,}$/,
        message: "First name should have at least 2 characters!"
    },
    lastName: {
        testRegex: /^\S{2,}$/,
        message: "Last name should have at least 2 characters!"
    },
    password: {
        testRegex: /^\S{8,}$/,
        message: "Password length should be higher than 8 characters!"
    },
    firstName: {
        testRegex: /^\S{2,}$/,
        message: "First name should have at least 2 characters!"
    },
    lastName: {
        testRegex: /^\S{2,}$/,
        message: "Last name should have at least 2 characters!"
    }
}

// form.onsubmit = submitForm;

// function submitForm(event) {
//     event.preventDefault();

//     var formElements = event.target.elements;
//     var formData = getFormData(event);

//     getFieldsValidation(formData.profile_name, formElements.profile_name, validationRules.name);
//     getFieldsValidation(formData.profile_title, formElements.profile_title, validationRules.title);
//     getFieldsValidation(formData.profile_email, formElements.profile_email, validationRules.email);
//     getFieldsValidation(formData.profile_bio, formElements.profile_bio, validationRules.bio);
//     getFieldsValidation(formData.profile_website, formElements.profile_website, validationRules.website);
//     getFieldsValidation(formData.profile_twitter, formElements.profile_twitter, validationRules.twitter);
//     getFieldsValidation(formData.profile_facebook, formElements.profile_facebook, validationRules.facebook);
//     getFieldsValidation(formData.profile_linkedin, formElements.profile_linkedin, validationRules.linkedin);
//     getFieldsValidation(formData.login_email, formElements.login_email, validationRules.email);
//     getFieldsValidation(formData.login_password, formElements.login_password, validationRules.password);
//     getFieldsValidation(formData.login_firstName, formElements.login_firstName, validationRules.firstName);
//     getFieldsValidation(formData.login_lastName, formElements.login_lastName, validationRules.lastName);
//     formData.login_passwordMatch === formData.login_password ? setSuccessFor(formElements.login_passwordMatch) : setErrorFor(formElements.login_passwordMatch, "Passwords do not match!");

//     authetication(event, formData.login_email, formData.login_password);

//     getProfileImage(getImageData("url"), getImageData("element"));

//     setDisplayProfileName(formData.profile_name);
// } 

function getFormData(formSubmitEvent) {
    let formData = new FormData(formSubmitEvent.target);
    let formProps = Object.fromEntries(formData);
    return formProps;
}

function getFieldsValidation(value, element, validationRule) {
    validationRule.testRegex.test(value) ? setSuccessFor(element) : setErrorFor(element, validationRule.message);
}

function setSuccessFor(input) {
    let selectElement = input.parentElement;
    let selectClasses = selectElement.classList;
    let displayErrorMessage = selectElement.querySelector("small");
    displayErrorMessage.textContent = "";

    selectClasses.remove("error");
    selectClasses.add("success");
}

function setErrorFor(input, message) {
    let selectElement = input.parentElement;
    let selectClasses = selectElement.classList;
    // let displayErrorMessage = selectElement.querySelector("small");
    // displayErrorMessage.textContent  = message;

    
    selectClasses.remove("success");
    selectClasses.add("error");
}

// ------ set/get local storage
function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function setToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function updateLocalStorage(key, data) {
    let existingData = getFromLocalStorage(key) || {};
    var newData = null

    if (typeof existingData == 'Array') {
        newData = [...existingData, ...data]
    } else {
        newData = {...existingData, ...data}
    }
    setToLocalStorage(key, newData)
}