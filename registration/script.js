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


 document.write(userNameInfo);
 document.write(userPasswordInfo);
 document.write(userEmailInfo);
}
function submitLoginHandler() {
 let Lusername = document.getElementById("Lusername");
 let Lpassword = document.getElementById("Lpassword");
 for (let i = 0; i < userPasswordInfo.length; i++) {
  if ((userEmailInfo[i] == Lusername.value || userNameInfo[i] == Lusername.value) && userPasswordInfo[i] == Lpassword.value) {
    document.write("you are logged in");
   document.write("User Email is: " + userEmailInfo[i]);
   document.write("User Name is: " + userNameInfo[i]);
   document.write("User Password is: " + userPasswordInfo[i]);
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
let todayDate = new Date();
let num1 = 9;
let num2 = 18;
if (num1 > 8 || num2 > 98) {
 document.writeln("welcome : today's date is" +" " + todayDate);
 
}
else {
 document.writeln("It is less" + todayDate);
}
for(var a =0; a <= 20; a++){
   /// document.write(a + "<BR>");
}
// do(let i=0){
//     i++;
// }while(i<10);

function displayProperties(inputObject, inputObjectName){
    var result = ""
    for (var eachProperty in inputObject) {
    result += inputObjectName + "." + eachProperty +
    " = " + inputObject[eachProperty] + "<BR>"
    }
    return result
    }
   // document.writeln(displayProperties(Element,"date"));
var totalInventory=700
var numberPurchased=200
var numberSales=0
while (totalInventory > numberPurchased) {
totalInventory = totalInventory - numberPurchased
numberSales++
}
// document.writeln("Our stock supply will support " +
// numberSales + " of these bulk sales")

// var article = "a";
// do {
//var answer = prompt("Would you like to purchase"  + " "
//+ article + " "
//+ "t-shirt? If so, enter the size.", "L")
//article = " ANOTHER "
//}
//while (answer != null)

// break and continue
var totalInventory=700, numberPurchased=200, numberSales=0;

while (totalInventory > numberPurchased) {
totalInventory=totalInventory - numberPurchased
numberSales++
if (numberSales > 2) {
break //stops the looping 
}
}

//continue
for(var i = 1; i <= 20; i++) {
    if (i == 13) { // superstitious; don’t print number 13
        continue
        }
  // console.log(i);
    }

// this and new instances
function ftalk(kindOfPet){
    if (kindOfPet == "dog") {
    document.writeln("bow-wow")
    }
    else {
    if (kindOfPet == "cat") {
    document.writeln("meow-meow-meow")
    }
    }
    }
    function pet(inputName, inputKind, inputColor) {
    this.name = inputName
    this.kind = inputKind
    this.color = inputColor
    this.talk = ftalk(inputKind)
    }
    var may = new pet('sample','wild', 'red');
    document.writeln(may);

    //literals
    //alert("Sorry, you entered your e-mail address incorrectly.")//string literal
   // x = 1.31415 * someVariable // floating-point literal
    //if (theAnswer == true) {// boolean literal
    //document.write("The total number of users is ") // document.#Lusername.value)//integer l


    var today = new Date();
    // Get the current month
    var month = today.getMonth();
    // Declare a variable called displayMonth
    var displayMonth="";
    // The following is a switch statement
    // Attach a display name to each of 12 possible month numbers
    switch (month) {
    case 0 :
    displayMonth = "Jan"
    break
    case 1 :
    displayMonth = "Feb"
    break
    case 2 :
    displayMonth = "Mar"
    break
    case 3 :
    displayMonth = "Apr"
    break
    case 4 :
    displayMonth = "May"
    break
    case 5 :
    displayMonth = "June"
    break
    case 6 :
    displayMonth = "July"
    break
    case 7 :
    displayMonth = "Aug"
    break
    case 8 :
    displayMonth = "Sept"
    break
    case 9 :
    displayMonth = "Oct"
    break
    case 10 :
    displayMonth = "November"
    break
    case 11 :
    displayMonth = "December"
    break
    default: displayMonth = "INVALID"
    }
    // Set some more variables to make the JavaScript code
    // easier to read
    var hours = today.getHours();
    var minutes = today.getMinutes();
    setInterval(() => {
        today.getMinutes();
    }, 60000);
    var greeting;
    var ampm;
    // We consider anything up until 11 a.m. “morning”
    if (hours <= 11) {
    greeting = "Good morning";
    ampm="a.m.";
    // JavaScript reports midnight as 0, which is just
    // plain crazy; so we want to change 0 to 12.
    if (hours == 0) {
    hours = 12;
    }
    }
    // We consider anything after 11:00 a.m. and before
    // 6 p.m. (in military time, 18) to be “afternoon”
    else if (hours > 11 && hours < 18) {
    greeting = "Good afternoon";
    ampm = "p.m.";
    // We don’t want to see military time, so subtract 12
        if (hours > 12) {
        hours -= 12;
        }
    }
    // We consider anything after five p.m. (17 military) but
    // before nine p.m. (21 in military time) “evening”
    else if (hours > 17 && hours < 21) {
    greeting = "Good evening";
    ampm = "p.m.";
    hours -= 12;
    }
    // We consider nine o’clock until midnight “night”
    else if (hours > 20) {
    greeting = "Good night";
    ampm = "p.m.";
    hours -= 12;
    }
    // We want the minutes to display with “0” in front
    // of them if they’re single-digit. For example,
    // rather than 1:4 p.m., we want to see 1:04 p.m.
    if (minutes < 10) {
    minutes = "0" + minutes;
    }
    // + is a concatenation operator 
    var displayGreeting = displayMonth + "  " + today.getMonth() + " , "
    + today.getFullYear() 
    + " , " + hours + ":" + minutes + " , " + ampm + " : " + greeting
    document.writeln(displayGreeting)


    var article = "a";
var numShirts = 0;
var smallShirts = 0;
var medShirts = 0;
var largeShirts = 0;
// The following is a function declaration.
function calc_shirts(sizeShirt) {
// Add 1 to the number of sized shirts ordered, as well
// as to the number of total shirts ordered
if (sizeShirt == "S" || sizeShirt == "s") {
// ++ is a unary increment operator.
smallShirts++;
numShirts++;
}
// == is a comparison operator.
else if (sizeShirt == "M" || sizeShirt == "m") {
medShirts++;
numShirts++;
}
else if (sizeShirt == "L" || sizeShirt == "l") {
largeShirts++;
numShirts++;
}
}
// The following is a do-while loop.
do {
var answer = prompt("Would you like to purchase"
+ article
+ " t-shirt? If so, enter the size (S,M,L) and click OK. When you finish, click Cancel", "M")
article = "ANOTHER"
if (answer != null) {
calc_shirts(answer);
}
}
while (answer != null) 
document.writeln("You ordered " + numShirts + " " + "shirts:" 
+ smallShirts + "small" + "<br>"
+ medShirts + "medium"
+ largeShirts + "large");