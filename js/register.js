function authetication(event, email, password) {
    event.preventDefault();
    
    if(email !== "" && password !== "") {
        window.location.replace("/profile.html");
    }
}

form.onsubmit = onSubmitRegisterForm;

function onSubmitRegisterForm(event) {
    event.preventDefault();

    var formElements = event.target.elements;
    var formData = getFormData(event);
    // throw new Error('AM picat aici')
    // getFieldsValidation(formData.profile_name, formElements.profile_name, validationRules.name);
    // getFieldsValidation(formData.profile_title, formElements.profile_title, validationRules.title);
    // getFieldsValidation(formData.profile_email, formElements.profile_email, validationRules.email);
    // getFieldsValidation(formData.profile_bio, formElements.profile_bio, validationRules.bio);
    // getFieldsValidation(formData.profile_website, formElements.profile_website, validationRules.website);
    // getFieldsValidation(formData.profile_twitter, formElements.profile_twitter, validationRules.twitter);
    // getFieldsValidation(formData.profile_facebook, formElements.profile_facebook, validationRules.facebook);
    // getFieldsValidation(formData.profile_linkedin, formElements.profile_linkedin, validationRules.linkedin);
    getFieldsValidation(formData.login_email, formElements.login_email, validationRules.email);
    getFieldsValidation(formData.login_password, formElements.login_password, validationRules.password);
    getFieldsValidation(formData.login_firstName, formElements.login_firstName, validationRules.firstName);
    getFieldsValidation(formData.login_lastName, formElements.login_lastName, validationRules.lastName);
    formData.login_passwordMatch === formData.login_password ? setSuccessFor(formElements.login_passwordMatch) : setErrorFor(formElements.login_passwordMatch, "Passwords do not match!");

    // authetication(event, formData.login_email, formData.login_password);

    // getProfileImage(getImageData("url"), getImageData("element"));

    // setDisplayProfileName(formData.profile_name);

    // if(getFromLocalStorage("players")) {
    //     var users = getFromLocalStorage("players") 
    // } else {
    //     var users = {}
    // }
    // let users = getFromLocalStorage("players") || {};

    // users[formData.login_email] = formData
    // users.push(formData)
    // localStorage.setItem('users', JSON.stringify(users));
    // updateLocalStorage("players", users)

    updateLocalStorage('players', {
        [formData.login_email]: formData
    })
    // console.log(users)
} 



// ---create users

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


// in formularu de login
// var isUserLoggedIn = getFromLocalStorage('isLogedIN')


//Actiune apas pe butonul de logut 
// setToLocalStorage('isLogedIN', false)




// var Obj1 = {
//     prop: "o prop",
//     prop2: '2 prop'
// }

// var noraml = 'normal'

// var obj2 = {
//     prop3: 'asta',
//     pro3: 'prop3',
//     pro4: 'prop3',
//     pro5: 'prop3',
//     pro6: 'cealalta',
//     pro7: 'prop3',
//     pro8: 'prop3',
// }


//  var obiectNOU = {...obj2,Obj1}
// //  var obiectNOU = {
// //     prop: "o prop",
// //     prop2: '2 prop'
// //     prop3: 'asta',
// //     pro3: 'prop3',
// //     pro4: 'prop3',
// //     pro5: 'prop3',
// //     pro6: 'cealalta',
// //     pro7: 'prop3',
// //     pro8: 'prop3',
// // }

// var {prop3, pro6, ...rest} = obj2 // -> prop3 = 'asta' / pro6 = 'cealalta' / rest = restul proprietatilor

// var prop3 = obj2.prop3
// var pro6 = obj2.pro6
// var rest = {
//     // prop3: 'asta',
//     pro3: obj2.pro3,
//     pro4: obj2.pro4,
//     pro5: 'prop3',
//     // pro6: 'cealalta',
//     pro7: 'prop3',
//     pro8: 'prop3',
// }

// var obiectnou = {...obj2, ...Obj1, normal} 

//TODO:  JS ES6 Array /Object -> deconstruction - YOUTUBE





// users = {
//     "marian.sadagurschi@gmail.com": {
//         mail: "marian.sadagurschi@gmail.com",
//         pasS: 'parloa123',
//         photo: null,
//         name: null,
//     },
//     "ionut@gmail.com": {
//         mail: "ionut@gmail.com",
//         pasS: 'parloa123',
//         photo: null,
//         name: null,
//     }
// }