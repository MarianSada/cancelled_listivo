

// var form = document.getElementById('profile__form');
// var checkBox = document.querySelector("#login_keepme_checkbox");

// const validationRules = {
//     name: {
//         testRegex: /[a-zA-Z]{4,}/,
//         message: "Field cannot be empty!"
//     },
//     title: {
//         testRegex: /[a-zA-Z]{2,}/,
//         message: "Field cannot be empty!"
//     },
//     email: {
//         testRegex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
//         message: "Email format is not correct format!"
//     },
//     bio: {
//         testRegex: /[a-zA-Z]{10,}/,
//         message: "Bio should have at least 10 characters!"
//     },
//     website: {
//         testRegex: /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)$/,
//         message: "The link should contain www"
//     },
//     twitter: {
//         testRegex: /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)$/,
//         message: "Twitter link is not complete"
//     },
//     facebook: {
//         testRegex: /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)$/,
//         message: "Facebook link is not complete"
//     },
//     linkedin: {
//         testRegex: /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)$/,
//         message: "Linkedin profile link is not complete"
//     }
// }

// let addProfileImage = document.querySelector("#addProfileImage");
// let uploadPhoto = document.querySelector("#uploadPhoto");
// let cancelSubmition = document.querySelector("#cancelBtn");

// cancelSubmition.addEventListener("click", onCancelSubmition);

// function onCancelSubmition() {
//     form.reset()
// }

// addProfileImage.addEventListener("click", function() {
//     uploadPhoto.click();
// })

// uploadPhoto.addEventListener("change", function() {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(uploadPhoto.files[0]);
//     fileReader.addEventListener("load", function() {
//         const url = fileReader.result;

//         photoFromLocalStorage = localStorage.setItem("profile-image", url);
//         return photoFromLocalStorage;
//         // document.querySelector("#profileImage").src = url
//     })
// })

// function setDisplayProfileName (name) {
//     profileNameFromLocalStorage = localStorage.setItem("profile_name", name);
//     getDisplaProfileName(profileNameFromLocalStorage);
// }

// function getDisplaProfileName() {
//     let headerProfileName = document.querySelector(".header-user-item");
//     headerProfileName.textContent = localStorage.getItem("profile_name")
// }
// getDisplaProfileName()

// -----------checkbox must be checked to submit---------
// checkBox.addEventListener("change", function(evt){
//     let submitBtn = document.querySelector("#submitBtn");
//     (evt.target).checked ? submitBtn.disabled = false : submitBtn.disabled = true;
// }) 

// function getFieldsValidation(value, element, validationRule) {
//     validationRule.testRegex.test(value) ? setSuccessFor(element) : setErrorFor(element, validationRule.message);
// }



// function submitForm (event) {
//     event.preventDefault();

//     var formElements = event.target.elements;
//     var formData = getFormData(event);

//     getFieldsValidation(formData.profile_name, formElements.profile_name, validationRules.name)
//     getFieldsValidation(formData.profile_title, formElements.profile_title, validationRules.title)
//     getFieldsValidation(formData.profile_email, formElements.profile_email, validationRules.email)
//     getFieldsValidation(formData.profile_bio, formElements.profile_bio, validationRules.bio)
//     getFieldsValidation(formData.profile_website, formElements.profile_website, validationRules.website)
//     getFieldsValidation(formData.profile_twitter, formElements.profile_twitter, validationRules.twitter)
//     getFieldsValidation(formData.profile_facebook, formElements.profile_facebook, validationRules.facebook)
//     getFieldsValidation(formData.profile_linkedin, formElements.profile_linkedin, validationRules.linkedin)

//     getProfileImage(getImageData("url"), getImageData("element"));
//     // getProfileImage(profileImageData.selectImageItem, profileImageData.profileImageURL);
//     setDisplayProfileName(formData.profile_name)
// }   

// let profileImageData = {
//     profileImageURL: localStorage.getItem("profile-image"),
//     selectImageItem: document.querySelector("#profileImage")
// }

// function getImageData(name) {
//     if(name == "url") {
//         return localStorage.getItem("profile-image")
//     }
//     if(name == "element") {
//         return document.querySelector("#profileImage")
//     }
// }


// getProfileImage(getImageData("url"), getImageData("element"));

// function getProfileImage(image, item) {
//     // console.log(item)
//     // console.log(image)
//     // image == undefined ? item.src = "default.jpeg" : item.src = image;
//     // item.src = image == undefined ? "default.jpeg" : image
//     item.src = image || "default.jpeg"
//     // item.src = image; 
//     let headerProfilePicture = document.querySelector(".header-use-profile-pic");
//     headerProfilePicture.src = image || "default.jpeg"
// }


// function setErrorFor(input, message) {
//     let selectElement = input.parentElement;
//     let selectClasses = selectElement.classList;
//     let small = selectElement.querySelector("small");
//     small.textContent = message;

//     selectClasses.remove("success");
//     selectClasses.add("error");
//     // selectClasses.contains("success") ? (selectClasses.remove("success"), selectClasses.add("error")) : selectClasses.add("error");
// }

// function setSuccessFor(input) {
//     let selectElement = input.parentElement;
//     let selectClasses = selectElement.classList;
//     let small = selectElement.querySelector("small");
//     small.textContent = "";
    
//     selectClasses.remove("error");
//     selectClasses.add("success");
//     // selectClasses.contains("error") ? (selectClasses.remove("error"), selectClasses.add("success")) : selectClasses.add("success");
// }

// function getFormData(formSubmitEvent) {
//     const formData = new FormData(formSubmitEvent.target);
//     const formProps = Object.fromEntries(formData);
//     return formProps;
// }

// form.onsubmit = submitForm;

// let logoutBtn = document.querySelector("#logoutBtn");

// logoutBtn.addEventListener("click", onLogoutBtn);

// function onLogoutBtn() {
//     console.log("clicked")
//     window.location.replace("login.html")
// }


// function validateMinLength(value, nimic) {
//     if (value.length > 2 ) {
//         // return true
//         setSuccessFor(nimic)
//     } else {
//         // return false
//         setErrorFor(nimic, errorMessage.empty)
//     }
// }

// function isEmailValid(value) {
//     let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
//     if (emailRegex.test(value)) {
//         setSuccessFor(elementSelector.email)

//     } else {
//         setErrorFor(elementSelector.email, errorMessage.email)
//     }
// }

// function isWebsiteValid(value) {
//     let websiteRegex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)$/;
//     if (websiteRegex.test(value)) {
//         setSuccessFor(elementSelector.website)

//     } else {
//         setErrorFor(elementSelector.website, errorMessage.website)
//     }
// }

// function isTwitterValid(value) {
//     // let twitterRegex = /(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/;
//     let twitterRegex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)$/;
//     if (twitterRegex.test(value)) {
//         setSuccessFor(elementSelector.twitter)

//     } else {
//         setErrorFor(elementSelector.twitter, errorMessage.twitter)
//     }
// }

// function isFacebookValid(value) {
//     // let facebookRegex = /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/;
//     let facebookRegex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)$/;
//     if (facebookRegex.test(value)) {
//         setSuccessFor(elementSelector.facebook)

//     } else {
//         setErrorFor(elementSelector.facebook, errorMessage.facebook)
//     }
// }

// function isLinkedinValid(value) {
//     // let linkedinRegex = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm;
//     let linkedinRegex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)$/;
//     if (linkedinRegex.test(value)) {
//         setSuccessFor(elementSelector.linkedin)

//     } else {
//         setErrorFor(elementSelector.linkedin, errorMessage.linkedin)
//     }
// }



















// FAKING A DB 

// var originalPerson = {
//     Name: "Marian",
//     Title: "",
//     Email: "",
//     Address: "",

// }
// var person = null
// var savedPerson = localStorage.getItem('persoana');

// if (!savedPerson) {
//     localStorage.setItem('persoana', JSON.stringify(originalPerson))
// } else {
//     person = JSON.parse(savedPerson);
// }

