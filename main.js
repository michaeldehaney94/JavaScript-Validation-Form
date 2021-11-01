//this function will remove the need for code repetition
//when delcaring elements from html
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id('username'),
email = id('email'),
password = id('password'),
form = id('form'), //added submit eventlistener
errorMsg = classes('error'), //error class div elements are stored in an array.
successIcon = classes('success-icon'),
failureIcon = classes('failure-icon');

//form submit evenlistener
form.addEventListener('submit', (e) => {
    e.preventDefault(); //stop unexpected behaviour
    //function call for each input field
    engine(username, 0, "Username cannot be blank!");
    engine(email, 1, "Email cannot be blank!");
    engine(password, 2, "Password cannot be blank!");   
});

//id - input variable, serial - array index, message - string
let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
        //this changes the opacity value in the css file from 0 to 1,
        //making the failure icon visible.
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}