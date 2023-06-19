var profileForm = document.getElementById('profile__form');
var checkBox = document.querySelector("#login_keepme_checkbox");


let addProfileImage = document.querySelector("#addProfileImage");
let uploadPhoto = document.querySelector("#uploadPhoto");
let cancelSubmition = document.querySelector("#cancelBtn");

let logoutBtn = document.querySelector("#logoutBtn");

logoutBtn.addEventListener("click", onLogoutBtn);

cancelSubmition.addEventListener("click", onCancelSubmition);

profileForm.onsubmit = onSubmitProfileForm;

function onSubmitProfileForm(event) {
    event.preventDefault();

    var formElements = event.target.elements;
    var formData = getFormData(event);

    getFieldsValidation(formData.profile_name, formElements.profile_name, validationRules.name);
    getFieldsValidation(formData.profile_title, formElements.profile_title, validationRules.title);
    getFieldsValidation(formData.profile_email, formElements.profile_email, validationRules.email);
    getFieldsValidation(formData.profile_bio, formElements.profile_bio, validationRules.bio);
    getFieldsValidation(formData.profile_website, formElements.profile_website, validationRules.website);
    getFieldsValidation(formData.profile_twitter, formElements.profile_twitter, validationRules.twitter);
    getFieldsValidation(formData.profile_facebook, formElements.profile_facebook, validationRules.facebook);
    getFieldsValidation(formData.profile_linkedin, formElements.profile_linkedin, validationRules.linkedin);

    getProfileImage(getImageData("url"), getImageData("element"));

    setDisplayProfileName(formData.profile_name);
} 



addProfileImage.addEventListener("click", function() {
    uploadPhoto.click();
})

uploadPhoto.addEventListener("change", function() {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(uploadPhoto.files[0]);
    fileReader.addEventListener("load", function() {
        const url = fileReader.result;

        photoFromLocalStorage = localStorage.setItem("profile-image", url);
        return photoFromLocalStorage;
        // document.querySelector("#profileImage").src = url
    })
})

function setDisplayProfileName (name) {
    profileNameFromLocalStorage = localStorage.setItem("profile_name", name);
    getDisplaProfileName(profileNameFromLocalStorage);
}

function getDisplaProfileName() {
    let headerProfileName = document.querySelector(".header-user-item");
    headerProfileName.textContent = localStorage.getItem("profile_name") || "My profile";
}

getDisplaProfileName()

function getImageData(name) {
    if(name == "url") {
        return localStorage.getItem("profile-image")
    }
    if(name == "element") {
        return document.querySelector("#profileImage")
    }
}

getProfileImage(getImageData("url"), getImageData("element"));

function onCancelSubmition() {
    profileForm.reset()
    // getProfileImage(getImageData("default"), getImageData("element"))
}

function getProfileImage(image, item) {
    // console.log(item)
    // console.log(image)
    // image == undefined ? item.src = "default.jpeg" : item.src = image;
    // item.src = image == undefined ? "default.jpeg" : image
    item.src = image || "default.jpeg"
    // item.src = image; 
    let headerProfilePicture = document.querySelector(".header-use-profile-pic");
    headerProfilePicture.src = image || "default.jpeg"
}

function onLogoutBtn() {
    console.log("clicked")
    window.location.replace("login.html")
}