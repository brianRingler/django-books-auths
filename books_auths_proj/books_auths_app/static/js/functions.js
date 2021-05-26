function resetGeneralInfo(){
    // get all elements in section 3
    const generalTextEl = document.querySelectorAll('form[name=general-frm] input[type=text]');
    const generalNumberEl = document.querySelectorAll('form[name=general-frm] input[type=number]');
    const generalDateEl = document.querySelectorAll('form[name=general-frm] input[type=date]');
    const generalEmailEl = document.querySelectorAll('form[name=general-frm] input[type=email]');
    const generalFileEl = document.querySelectorAll('form[name=general-frm] input[type=file]');
    const generalRadioEl = document.querySelectorAll('form[name=general-frm] input[type=radio]');
    const generalTxtAreaEl = document.querySelectorAll('form[name=general-frm] textarea');

    for (let i=0; i < generalTextEl.length;i++){
        generalTextEl[i].value = "";
    }

    for (let i=0; i < generalNumberEl.length;i++){
        generalNumberEl[i].value = "";
    }

    for (let i=0; i < generalDateEl.length;i++){
        generalDateEl[i].value = "";
    }


    for (let i=0; i < generalEmailEl.length;i++){
        generalEmailEl[i].value = "";
    }

    for (let i=0; i < generalFileEl.length;i++){
        generalFileEl[i].value = "";
    }

    for (let i=0; i < generalRadioEl.length;i++){
        generalRadioEl[i].checked = false;
    }

    for (let i=0; i < generalTxtAreaEl.length;i++){
        generalTxtAreaEl[i].value = "";
    }
}


function resetContactInfo(){
    // get all elements in section 3
    const contactTextEl = document.querySelectorAll('form[name=contact-frm] input[type=text]');
    const contactNumberEl = document.querySelectorAll('form[name=contact-frm] input[type=number]');
    const contactTelEl = document.querySelectorAll('form[name=contact-frm] input[type=tel]');
    const contactUrlEl = document.querySelectorAll('form[name=contact-frm] input[type=url]');
    const contactEmailEl = document.querySelectorAll('form[name=contact-frm] input[type=email]');

    for (let i=0; i < contactTextEl.length;i++){
        contactTextEl[i].value = "";
    }

    for (let i=0; i < contactNumberEl.length;i++){
        contactNumberEl[i].value = "";
    }

    for (let i=0; i < contactTelEl.length;i++){
        contactTelEl[i].value = "";
    }

    for (let i=0; i < contactUrlEl.length;i++){
        contactUrlEl[i].value = "";
    }

    for (let i=0; i < contactEmailEl.length;i++){
        contactEmailEl[i].value = "";
    }
}


// user_profile.html reset input data address section 
function resetAddressInfo(){
    // get all elements in section 3
    const addressTextEl = document.querySelectorAll('form[name=address-frm] input[type=text]');
    const addressNumberEl = document.querySelectorAll('form[name=address-frm] input[type=number]');
   
    for (let i=0; i < addressTextEl.length;i++){
        addressTextEl[i].value = "";
    }

    for (let i=0; i < addressNumberEl.length;i++){
        addressNumberEl[i].value = "";
    }
}


// function inputLocations() {
//     const firstNameEl = document.getElementById("first-name");
//     const firstNameXY = firstNameEl.getBoundingClientRect();

//     const lastNameEl = document.getElementById("last-name");
//     const lastNameXY = lastNameEl.getBoundingClientRect();

//     const userDobEl = document.getElementById("user-dob");
//     const userDobXY = userDobEl.getBoundingClientRect();
    
//     const userStateEl = document.getElementById("user-state");
//     const userStateXY = userStateEl.getBoundingClientRect();

//     console.log(firstNameXY['x']);
//     console.log(lastNameXY['x']);
//     console.log(userDobXY['x']);
//     console.log(userStateXY['x']);
//     console.log(firstNameEl);

// }


// inputLocations();
// const userStateEl = document.getElementById("user-state");
// const userStateXY = userStateEl.getBoundingClientRect();
// console.log(userStateEl);
// console.log(`userStateXY ${userStateXY['x']}`);
// userStateEl.style.margin = "0 0 0 52px";
// console.log((313.96875 - userStateXY['x']));

// console.log(`BLAGHHHH ${userStateXY['x'] + (313.96875 - userStateXY['x'])}`);

// console.log(userStateXY['x']);
// console.log(userStateEl);

