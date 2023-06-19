
var addListing = document.querySelector('.profile__form');
let cancelSubmition = document.querySelector("#cancelBtn");

cancelSubmition.addEventListener("click", onCancelSubmition);

addListing.onsubmit = onSubmitAddListing;

function onSubmitAddListing(event) {
    event.preventDefault();

    var formElements = event.target.elements;
    var formData = getFormData(event);

    getFieldsValidation(formData.listing_title, formElements.listing_title, validationRules.name);
    // getFieldsValidation(formData.profile_title, formElements.profile_title, validationRules.title);
    // getFieldsValidation(formData.profile_email, formElements.profile_email, validationRules.email);
    // getFieldsValidation(formData.profile_bio, formElements.profile_bio, validationRules.bio);
    // getFieldsValidation(formData.profile_website, formElements.profile_website, validationRules.website);
    // getFieldsValidation(formData.profile_twitter, formElements.profile_twitter, validationRules.twitter);
    // getFieldsValidation(formData.profile_facebook, formElements.profile_facebook, validationRules.facebook);
    // getFieldsValidation(formData.profile_linkedin, formElements.profile_linkedin, validationRules.linkedin);

    let luid = getNewListingID();
    updateLocalStorage('Listings', {
        [luid]: {...formData, luid}
    })

} 

function getNewListingID() {
    return Math.random().toString(36).replace('0.',"ID" || '');
}

function onCancelSubmition() {
    profileForm.reset()
    // getProfileImage(getImageData("default"), getImageData("element"))
}