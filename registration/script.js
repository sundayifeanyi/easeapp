var loginAd = document.getElementById("loginAd");
var registerAd = document.getElementById("registerAd");
var loginForm = document.getElementById("loginForm");

var log_out = document.getElementById("log_out");
var user_name = document.getElementById("user_name");

var submitReg = document.getElementById("submitReg");
var submitLogin = document.getElementById("submitLogin");
var emailUsed = document.getElementById("emailUsed");
var userNameInfo = [];
var userPasswordInfo = [];
var userEmailInfo = [];
var found = 0;

var registerForm = document.getElementById("registerForm");
function hideForm() {
 loginForm.style.display = "none";
 registerForm.style.display = "none";
 log_out.style.display = "none";
 user_name.style.display = "none";
 emailUsed.style.display = "none";
}

submitReg.addEventListener("click", submitRegHandler, false);
submitLogin.addEventListener("click", submitLoginHandler, false);
log_out.addEventListener("click", log_outHandler, false);

loginAd.addEventListener("click", loginAdHandler, false);
registerAd.addEventListener("click", registerAdHandler, false);

function loginAdHandler() {
 loginForm.style.display = "block";
 registerForm.style.display = "none";
}
function registerAdHandler() {
 loginForm.style.display = "none";
 registerForm.style.display = "block";
}
function submitRegHandler() {
 found = 0;
 emailUsed.style.display = 'none';
 let username = document.getElementById("username");
 let email = document.getElementById("email");
 let password = document.getElementById("password");
 if (username.value != "" && password.value != "" && email.value != "") {
  if (userEmailInfo.length > 0) {
   for (let i = 0; i < userEmailInfo.length; i++) {
    if (userEmailInfo[i] == email.value) {
     console.log(userEmailInfo[i] + " " + email.value);
     emailUsed.innerHTML = "This email is already in use";
     emailUsed.style.display = 'block';
     found = 1;
     break;
    }
   }
   if (found == 0) {
    userNameInfo.push(username.value);
    userPasswordInfo.push(password.value);
    userEmailInfo.push(email.value);
    username.value = '';
    email.value = '';
    password.value = '';

   }
  }
  else {
   userNameInfo.push(username.value);
   userPasswordInfo.push(password.value);
   userEmailInfo.push(email.value);
   username.value = '';
   email.value = '';
   password.value = '';
  }
 }


 console.log(userNameInfo);
 console.log(userPasswordInfo);
 console.log(userEmailInfo);
}
function submitLoginHandler() {
 let Lusername = document.getElementById("Lusername");
 let Lpassword = document.getElementById("Lpassword");
 for (let i = 0; i < userPasswordInfo.length; i++) {
  if ((userEmailInfo[i] == Lusername.value || userNameInfo[i] == Lusername.value) && userPasswordInfo[i] == Lpassword.value) {
   console.log("you are logged in");
   console.log("User Email is: " + userEmailInfo[i]);
   console.log("User Name is: " + userNameInfo[i]);
   console.log("User Password is: " + userPasswordInfo[i]);
   loginAd.style.display = "none";
   registerAd.style.display = "none";
   log_out.style.display = "block";
   user_name.style.display = "block";
   log_out.innerHTML = "Log Out";
   user_name.innerHTML = userNameInfo[i];
  }
 }
}

function log_outHandler() {
 log_out.style.display = "none";
 user_name.style.display = "none";
 loginAd.style.display = "block";
 registerAd.style.display = "block";

}


