(function () {
    let closeModal = document.querySelector("#closeModal");
    let generatePass = document.querySelector("#generatePass");

    closeModal.addEventListener("click", onCloseModal);
    generatePass.addEventListener("click", onGeneratePass);

    function onGeneratePass() {
        document.querySelector("#modal-wrapper").style.visibility = "visible";
        setTimeout(onCloseModal, 3000);
    }

    function onCloseModal() {
        document.querySelector("#modal-wrapper").style.visibility = "hidden";
    }
})()

form.onsubmit = onSubmitRecoverpassForm;

function onSubmitRecoverpassForm(event) {
    event.preventDefault();

    var formElements = event.target.elements;
    var formData = getFormData(event);

    // getFieldsValidation(formData.profile_name, formElements.profile_name, validationRules.name);
    // getFieldsValidation(formData.profile_title, formElements.profile_title, validationRules.title);
    // getFieldsValidation(formData.profile_email, formElements.profile_email, validationRules.email);
    // getFieldsValidation(formData.profile_bio, formElements.profile_bio, validationRules.bio);
    // getFieldsValidation(formData.profile_website, formElements.profile_website, validationRules.website);
    // getFieldsValidation(formData.profile_twitter, formElements.profile_twitter, validationRules.twitter);
    // getFieldsValidation(formData.profile_facebook, formElements.profile_facebook, validationRules.facebook);
    // getFieldsValidation(formData.profile_linkedin, formElements.profile_linkedin, validationRules.linkedin);
    getFieldsValidation(formData.login_email, formElements.login_email, validationRules.email);
    // getFieldsValidation(formData.login_password, formElements.login_password, validationRules.password);
    // getFieldsValidation(formData.login_firstName, formElements.login_firstName, validationRules.firstName);
    // getFieldsValidation(formData.login_lastName, formElements.login_lastName, validationRules.lastName);
    // formData.login_passwordMatch === formData.login_password ? setSuccessFor(formElements.login_passwordMatch) : setErrorFor(formElements.login_passwordMatch, "Passwords do not match!");

    // authetication(event, formData.login_email, formData.login_password);

    // getProfileImage(getImageData("url"), getImageData("element"));

    // setDisplayProfileName(formData.profile_name);
} 