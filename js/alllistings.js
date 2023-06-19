
const newListing = `
    <tr class="table-listings__row" data-new-listing="{{luid}}">
        <td class="table-cell cell-flex">
            <img class="body-column-image" src="https://accomu.netlify.app/img/Image/landing-page-image/researching.jpg" alt="">
            <span class="title-2 listing-title">{{name}}</span>
        </td>
        <td class="table-cell paragraph-style-2" id="listing-category">
            {{category}}
        </td>
        <td class="table-cell paragraph-style-2" id="listing-location">
            {{location}}
        </td>
        <td class="table-cell paragraph-style-2" id="listing-review">
            <i class="fa-solid fa-star review-star"></i>
            {{rating}}
        </td>
        <td class="table-cell paragraph-style-2">
            <button class="table-btn add-new-listing" data-editlistingID="{{luid}}">EDIT</button>
            <button class="table-btn" data-deletelistingID="{{luid}}">DELETE</i></button>
        </td>
    </tr>`

const tableListing = document.querySelector(".table-listings");
let alllistings = getFromLocalStorage("Listings");
// let editBtn = document.querySelector("#editBtn");
// let deleteBtn = document.querySelector("#deleteBtn"); // NULL pentru ca cand se incarca documentul aceste butoane nu exista!
document.addEventListener('click', function(event){
    // si in functia asta verific daca am apasat pe butonul care trebuie
    const elementPressed = event.target;
    const luid = elementPressed.dataset.deletelistingid;
    const editLuid = elementPressed.dataset.editlistingid;
    // console.log(elementPressed)
    // console.log('EVENT TARGET: ', event.target)
    // console.log("luid", luid)
    // console.log("editLuid", editLuid)

    if(!!luid) {
        onDelete(luid)
    }
    
    if (!!editLuid) {
        // TODO: de luat din local storage

        const article = getFromLocalStorage('Listings')[editLuid]

        // console.log(article)

        // const getListingTitle = elementPressed.parentElement.parentElement.querySelector(".listing-title").textContent;
        // const getListingCategory = elementPressed.parentElement.parentElement.querySelector("#listing-category").textContent;
        // const getListingLocation = elementPressed.parentElement.parentElement.querySelector("#listing-location").textContent;

        const getListingTitleElement = elementPressed.parentElement.parentElement.querySelector(".listing-title");
        const getListingCategoryElement = elementPressed.parentElement.parentElement.querySelector("#listing-category");
        const getListingLocationElement = elementPressed.parentElement.parentElement.querySelector("#listing-location");

        //  onEdit(getListingTitle, getListingCategory, getListingLocation, getListingTitleElement, getListingCategoryElement, getListingLocationElement, editLuid)
        // local storage timpstamp: created at, status: apropbat sau nu

        onEdit(article.listing_title, article.listing_category, article.listing_city, getListingTitleElement, getListingCategoryElement, getListingLocationElement, editLuid)
    }   
})

let listingKeys = Object.keys(alllistings);
let listingValues = Object.values(alllistings);

listingValues.forEach(addListingToPage)

function addListingToPage(listing) {
    let newtemplate = replaceInTemplate(newListing, "{{luid}}", listing.luid)
    let newListingWithTitle = replaceInTemplate(newtemplate, "{{name}}", listing.listing_title)
    let newListingWithCategory = replaceInTemplate(newListingWithTitle, "{{category}}", listing.listing_category)
    let newListingWithLocation = replaceInTemplate(newListingWithCategory, "{{location}}", listing.listing_city)
    
    tableListing.innerHTML = tableListing.innerHTML + newListingWithLocation 
    // createEventListener()
}
// addListingToPage({
//     luid:'unIDUNICADICA0',
//     listing_title:'BUCURESTI BASARABIA',
//     listing_category:"BOSS DE BOSS",
//     listing_city:'Bucuresti'
// })


// intrare 1
// intrare 2 - edit  
// intrare 3


function replaceInTemplate(template, toReplace, value) {
    return template.replaceAll(toReplace, value)
}

// ---- modal behavior -----
let addListingBtn = document.querySelector(".add-new-listing");
let closeModal = document.querySelector(".closeModal");
let addListingForm = document.querySelector(".add-listing-form")


addListingBtn.addEventListener("click", showModal)
closeModal.addEventListener("click", onCloseModal);

function showModal() {
    document.querySelector(".add-listing-modal").style.visibility = "visible";
    // document.querySelector(".modal__submit-btn").type = "submit"; // TODO: NU AICI!!!

    // de adaugat parametru pentru schimbare tip buton
}

function onCloseModal() {
    // addListingForm.reset()  // TODO: NU AICI!!! - functia e onclosemodal.. nu reset form
    addListingForm.editedArticleID = null;
    document.querySelector(".add-listing-modal").style.visibility = "hidden";
}

// ---- submit modal form ------

addListingForm.onsubmit = onSubmitAddListing;

function onCancelEdit() { //TODO: de pus pe butonul de cancel
    onCloseModal()
    addListingForm.reset()
}

function onSubmitAddListing(event) {
    event.preventDefault();
    var articleToEdit = addListingForm.editedArticleID

    // var formElements = event.target.elements;§
    var formData = getFormData(event);
    // console.log(formElements)
    // getFieldsValidation(formData.listing_title, formElements.listing_title, validationRules.name);

    let luid = articleToEdit || getNewListingID();

    const newListing = {
        [luid]: {...alllistings[articleToEdit], ...formData, luid}
    }

    updateLocalStorage('Listings', newListing)
    onCloseModal()
    addListingForm.reset()

    if(articleToEdit) {
        updateListingAfterEdit(newListing[luid])
    } else {
        updateListingToPage(formData)
    }

    addListingForm.editedArticleID = null;

    addListingForm.reset()
} 

function getNewListingID() {
    return Math.random().toString(36).replace('0.',"ID" || '');
}

let on_alllistings = true;

function updateListingToPage(listing) {
    if(on_alllistings) {
        addListingToPage(listing)
    }
}

function onEdit(title, category, location, titleElement, categoryElement, locationElement, editLuid) {
// TODO: tu editezi un articol / listare nu o lista de atribute 
// function onEdit(articleID) { -!!! de investigat

    addListingForm.editedArticleID = editLuid
    // console.log('VARIABILA: ', arguments) 
    // console.log('VARIABILA: ', arguments) 
    // console.log('VARIABILA: ', arguments) 


    // Faci Modal GENERAL DE ADD LISTING care poate fii apelat de pe orice pagina de la butonul 
    // din dreapta sus. Modal cu 4 campuri sau cate ai tu.. ->submit adauga o listare noua in localstorage in obiectul cu cheia listings
    // si daca esti pe pagina de listari aceasta noua listare se va regasii si in lista (direct si in tabelul din pagina) :D


    // PE EDIT deschizi acelasi - ACELASI - modal dar ai campurile prepopulate cu date din localstorage de pe listarea cu ID respectiv
    showModal() // de adaugat parametru pentru schimbare tip buton

    // primesc datele necesare pentru prefill modal in parametrii functiei
    // iau elementele din modal
    var getHtmlTitleElement = document.querySelector(".modal-content__listing-title");
    var getHtmlCategoryElement = document.querySelector(".modal-content__listing-category");
    var getHtmlLocationElement = document.querySelector(".modal-content__listing-location");
    const article = getFromLocalStorage('Listings')[editLuid]
    // setez valorile prefill din modal
    getHtmlTitleElement.value = article.listing_title
    getHtmlCategoryElement.value = article.listing_category;
    getHtmlLocationElement.value = article.listing_city;
    
    // LA SUBMIT Faci update la template in HTML. :D FARA REFRESH la pagina
    // cand fac submit din modal de pe pagina de all listing

    // let submitEditedListing = document.querySelector(".modal__submit-btn");
    // submitEditedListing.type = "button"; // de adaugat parametru pentru schimbare tip buton

    // submitEditedListing.addEventListener("click", function(event) {
    //     event.preventDefault();
    //     console.log('AICI DAU CLICK +', new Date())
    //     updateListingAfterEdit(titleElement, categoryElement, locationElement, getHtmlTitleElement.value, getHtmlCategoryElement.value, getHtmlLocationElement.value);
    //     updateLocalStorageAfterEdit(editLuid, getHtmlTitleElement.value, getHtmlCategoryElement.value, getHtmlLocationElement.value);
    //     onCloseModal();
    // })
    
    // addListingForm.onsubmit = null;

    // console.warn('error') // console are mai multe variante. poti sa arunci o eroare un log un warn .. am pus asa ca sa mai vezi ceva adica o atentionare :D ok

}

// function updateArticleInLSAfterEdit(editLuid, titleValue, categoryValue, locationValue) {
//     // console.log(editLuid)
//     alllistings[editLuid].listing_title = titleValue;
//     alllistings[editLuid].listing_category = categoryValue;
//     alllistings[editLuid].listing_city = locationValue;
//     // setToLocalStorage("Listings", alllistings)
// }

// function updateListingAfterEdit(titleElement, categoryElement, locationElement, titleValue, categoryValue, locationValue) {
    function updateListingAfterEdit(article) {
    // titleElement.textContent = titleValue;
    // categoryElement.textContent = categoryValue;
    // locationElement.textContent = locationValue;


    //z

// console.log('ARTICLE:', article)

    // const articleToRefresh = getFromLocalStorage('Listings')[article.luid]
    // console.log('LS after edit: ', getFromLocalStorage('Listings'))
    // console.log('LS after edit ID:', articleID )
    // console.log('LS after edit: ', articleToRefresh)
    const articleHtml = document.querySelector(`[data-new-listing="${article.luid}"]`)
    // console.log('articleToRefresh:', JSON.stringify(article))
    // console.log('location_category:',article.listing_category)
    // console.log('location_city:', article.listing_city)
// window.mm = articleHtml.querySelector('.listing-title')
    // console.log("articleHtml.querySelector('.listing-title')", articleHtml.querySelector('.listing-title'))
    articleHtml.querySelector('.listing-title').textContent = article.listing_title;
    articleHtml.querySelector('#listing-category').textContent = article.listing_category;
    articleHtml.querySelector('#listing-location').textContent = article.listing_city;
    // console.log('ceva nou', articleHtml.querySelector('.listing-title').textContent)

    // primesti doar editId
    // getelementby data attribute de elementID
    //  in elementul ala cauti tiltu/cattegorie/locaie si faci update la valori


    // !!! nu merge pentru ca pun valorile noi tot in elementele din Modal

    // console.log(title)
    // console.log(titleValue)
}

function onDelete(listingID) {
    
    // PSEUDO CODE
    // Primesti Listing ID 
    // Stergi listarea
    delete alllistings[listingID];
    // salvezi in LocalStorage
    setToLocalStorage("Listings", alllistings)
    // stergi din template doar bucata cu id respectiv
    // deleteListingFromHTML();
    let selectionToDelete = document.querySelector(`[data-new-listing="${listingID}"]`);
    selectionToDelete && selectionToDelete.remove()

}




























// function displayNewListing() {
    
//         listingKeys.forEach(listing => {
//             if(alllistings !== ""){
//                 tableListing.innerHTML = tableListing.innerHTML + newListing
//                 .replace("{{luid}}", listing)
//             }
//         })
//         addTitleName()
//         addCategory()
//         addLocation()
//         addReview()
// }
// displayNewListing()

// function addTitleName() {
//     let listingTitle = document.querySelectorAll(".listing-title");
//     for(i = 0; i < listingTitle.length; i++) {
//         listingTitle[i].innerHTML = listingTitle[i].innerHTML
//         .replace("{{name}}", listingValues[i].listing_title);
//     }
// }

// function addCategory() {
//     let listingCategory = document.querySelectorAll("#listing-category");
//     // console.log(listingCategory)
//     for(i = 0; i < listingCategory.length; i++) {
//         listingCategory[i].innerHTML = listingCategory[i].innerHTML
//         .replace("{{category}}", listingValues[i].listing_category);
//     }
// }

// function addLocation() {
//     let listingLocation = document.querySelectorAll("#listing-location");
//     // console.log(listingCategory)
//     for(i = 0; i < listingLocation.length; i++) {
//         listingLocation[i].innerHTML = listingLocation[i].innerHTML
//         .replace("{{location}}", listingValues[i].listing_city);
//     }
// }

// function addReview() {
//     let listingReview = document.querySelectorAll("#listing-review");
//     // console.log(listingCategory)
//     for(i = 0; i < listingReview.length; i++) {
//         listingReview[i].innerHTML = listingReview[i].innerHTML
//         .replace("{{rating}}", 0);
//     }
// }


// function updateListings() {
//     // let listingTitle = document.querySelector("#listing-title");
//     let listingCategory = document.querySelector("#listing-category");
//     let listingLocation = document.querySelector("#listing-location")
//     // listingTitle.textContent = listingValues.listing_title;
//     // listingTitle.textContent = Object.entries(alllistings)[0][1].listing_title;
//     // listingCategory.textContent = Object.entries(alllistings)[0][1].listing_category;
//     // listingLocation.textContent = Object.entries(alllistings)[0][1].listing_city;
//     // console.log(Object.entries(alllistings)[0][1].listing_location)

// }
// updateListings()