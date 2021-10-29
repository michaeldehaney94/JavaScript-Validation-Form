//this function will remove the need for code repetition
//when delcaring elements from html
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id('username'),
email = id('email'),
password = id('password'),
errorMsg = classes('error'), //elements are stored in an array.
successIcon = classes('success-icon'),
failureIcon = classes('failure-icon');