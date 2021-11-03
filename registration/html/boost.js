// Regular Expression  Meaning
// /  Beginning of the pattern
// ^  Beginning of a string
// \w+ One or more letters, numbers, or underscores
// @  The @ symbol
// \w+  One or more letters, numbers, or underscores
// (\.\w{3}) A dot followed by three letters, numbers, or
// underscores
// $ Ending of a string
// / Ending of the pattern

//validate user input
function isAValidEmail(inputValue) {
    var foundAt = false
    var foundDot = false
    var atPosition = -1
    var dotPosition = -1
    // Step through each character of the e-mail
    // address and set a flag when (and if) an
    // @ sign and a dot are detected.
    for (var i = 0; i <= inputValue.length; i++) {
        if (inputValue.charAt(i) == '@') {
            foundAt = true
            atPosition = i
        }
        else if (inputValue.charAt(i) == '.') {
            foundDot = true
            dotPosition = i
        }
    }
    // If both an @ symbol and a dot were found, and
    // in the correct order (@ must come first)...
    if ((foundAt && foundDot) && (atPosition < dotPosition)) {
        // It’s a valid e-mail address.
        alert('Thanks for entering a valid e-mail address!')
        return true
    }
    else {
        // The e-mail address is invalid.
        alert('Sorry, you entered an invalid e-mail address. Please try again.')
        return false
    }
}

// designates the variable “emailPattern” as a RegExp object.
function validateEmail(input) {
    var result = parseFloat('45.6')
    var pasrer = isNaN(input)
    if (pasrer) {
        document.writeln(result + pasrer + 'sent')
    } else {
        document.writeln('wrongly' + 'sent')
    }

    var emailPattern = /^\w+@\w+(\.\w{3})$/
    // test() is a built-in method of the RegExp object.
    if (emailPattern.test(input)) {
        alert('This is a valid e-mail address.')
    }
    else {
        alert('Error: this is NOT a valid e-mail address')
    }
}

// check char existence
function exists(inputValue) {
    var aCharExists = false
    // Step through the inputValue, using the charAt()
    // method to detect non-space characters.
    for (var i = 0; i <= inputValue.length; i++) {
        if (inputValue.charAt(i) != " " && inputValue.charAt(i) != "") {
            aCharExists = true
            break
        }
    }
    return aCharExists
}
//check for a valid number
function isANumber(inputValue) {
    // Assume everything is okay right off the bat.
    var result = true
    // If parseFloat() returns false, a non-numeric
    // character was detected in the first position.
    if (!parseFloat(inputValue)) {
        result = false
    }
    // Otherwise, check the
    // rest of the digits.
    else {
        for (var i = 0; i < inputValue.length; i++) {
            if (inputValue.charAt(i) != " ") {
                if (!parseFloat(inputValue.charAt(i))) {
                    result = false
                    break
                }
            }
        }
    }
    // Return true (inputValue is a valid number) or
    // false (it’s invalid).
    return result
}
function isAValidPhoneNumber(inputValue) {
    for (var i = 0; i <= inputValue.length; i++) {
        //Calling the isANumber() function from inside another custom function
        if (isANumber(inputValue.charAt(i))) {
            digitsFound++
        }
    }
}
// patter matching
function isAValidPhoneNumber(inputValue) {
    var digitsFound = 0
    // Step through the inputValue to see how
    // many digits it contains.
    for (var i = 0; i <= inputValue.length; i++) {
        if (isANumber(inputValue.charAt(i))) {
            digitsFound++
        }
    }
    // If inputValue contains at least 10
    // digits, assume it is a valid phone number.
    if (digitsFound >= 10) {
        return true
    }
    else {
        return false
    }
}
//Calling the isAValidPhoneNumber() function
// if (!isAValidPhoneNumber(inputValue)) {
//     alert("We can’t contact you via phone unless you give us your phone number(make sure to include your area code). Thanks!")
// }
//recursion 
function recursion() {
    alert('1')
    function sec() {
        alert('2')
        function third() {
            alert('3')
        }
    }
}

// function displayMenu(currentMenu) {
//     var thisMenu = document.getElementById(currentMenu).style
//     if (thisMenu.display == "block") {
//         thisMenu.display = "none"
//     }
//     else {
//         // If the menu is contracted, expand it
//         thisMenu.display = "block"
//     }
//     return false
// }
function disMenu() {
    document.getElementById('bookMenu').style
    console.log('works');
} disMenu()

function displayMenu(currentPosition, nextPosition) {
    var whichMenu = document.getElementById(currentPosition).style;
    if (displayMenu.arguments.length == 1) {
        if (parseInt(whichMenu.top) == -5) {
            nextPosition = -90;
        }
        else {
            // Otherwise, set nextPosition to -5
            nextPosition = -5;
        }
    }
    // Redisplay the menu using the value of “nextPosition”
    whichMenu.top = nextPosition + "px";
}

// check sub entries selina tested 
function isAPhoneNumber(entry) {
    if (entry) {
        // Set openParen = to the first character of entry.
        var openParen = entry.substring(0, 1)
        // Set areaCode = to the next 3 characters.
        var areaCode = entry.substring(1, 4)
        // Set closeParen = to the 5th character.
        var closeParen = entry.substring(4, 5)
        // Set exchange = to characters 6, 7, and 8.
        var exchange = entry.substring(5, 8)
        // Set dash = to the 9th character.
        var dash = entry.substring(8, 9)
        // Set line = to the 10th through 13th characters.
        var line = entry.substring(9, 13)
        // The following if statement checks all the pieces
        if (
            (openParen != '(') ||
            (!isANumber(areaCode)) ||
            (closeParen != ')') ||
            (!isANumber(exchange)) ||
            (dash != '-') ||
            (!isANumber(line))
        ) {
            alert("Incorrect phone number. Please re-enter in the following format: (123)456-7890")
        } else { alert("sucessful 'thank you'") }
    }
}

//all fields validation
function isANumber(inputValue) {
    // Assume everything is okay.
    var result = true
    if (!parseFloat(inputValue)) {
        result = false
    }
    else {
        for (var i = 0; i < inputValue.length; i++) {
            if (inputValue.charAt(i) != " ") {
                if (!parseFloat(inputValue.charAt(i))) {
                    result = false
                    break
                }
            }
        }
    }
    return result
}
function isAValidEmail(inputValue) {
    var foundAt = false
    var foundDot = false
    // Step through the inputValue looking for
    // “@” and “.”
    for (var i = 0; i <= inputValue.length; i++) {
        if (inputValue.charAt(i) == '@') {
            foundAt = true
        }
        else if (inputValue.charAt(i) == '.') {
            foundDot = true
        }
    }
    if (foundAt && foundDot) {
        return true
    }
    else {
        return false
    }
}

//digitsfound wiats for user to complete form b4 validation
function isAValidPhoneNumber(inputValue) {
    var digitsFound = 0
    // Step through the inputValue to see how
    // many digits it contains.
    for (var i = 0; i <= inputValue.length; i++) {
        if (isANumber(inputValue.charAt(i))) {
            digitsFound++
        }
    }
    // If inputValue contains at least 10
    // digits, assume it is a valid phone number.
    if (digitsFound >= 10) {
        return true
    }
    else {
        return false
    }
}

function exists(inputValue) {
    var aCharExists = false
    // Step through the inputValue, using the charAt()
    // method to detect non-space characters.
    for (var i = 0; i <= inputValue.length; i++) {
        if (inputValue.charAt(i) != " " && inputValue.charAt(i) != "") {
            aCharExists = true
            break
        }
    }
    return aCharExists
}

function validateForm() {
    var rc = true
    if (!document.quoteForm.designChoice.checked &&
        !document.quoteForm.maintChoice.checked &&
        !document.quoteForm.promoChoice.checked) {
        alert("Please check whether you’re interested in our design,maintenance, or promotion services so we can give you a more accurate quote. Thanks!")
        rc = false
    }

    if (!document.quoteForm.firstName.value ||
        !document.quoteForm.lastName.value) {
        alert("Please type in your entire name (both first and last). Thanks!")
        rc = false
    }
    if (!document.quoteForm.emailChoice.checked &&
        !document.quoteForm.phoneChoice.checked) {
        alert("Please let us know whether you’d like us to contact you by e-mail or by phone. Thanks!")
        rc = false
    }
    if (document.quoteForm.emailChoice.checked &&
        !isAValidEmail(document.quoteForm.emailAddr.value)) {
        alert('We can’t contact you via e-mail unless you give us a valid e-mail address. Thanks!')
        rc = false
    }
    else {
        if (document.quoteForm.phoneChoice.checked &&
            !isAValidPhoneNumber(document.quoteForm.phoneNumber.value)) {
            alert('We can’t contact you via phone unless you give us your phone number(make sure to include your area code).Thanks!')
            rc = false
        }
    }
    if (rc) {
        // If the rc variable is non-zero, then the form data
        // passed with flying colors!
        alert("Thanks! We’ll contact you with a quote shortly.")
    }
    return rc
}

function getMonthName(monthNumber) {
    // JavaScript arrays begin with 0, not 1, so
    // subtract 1.
    monthNumber = monthNumber - 1
    // Create an array and fill it with 12 values
    var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec")
    if (months[monthNumber] != null) {
        return (months[monthNumber])
    }
    // Otherwise, an exception occurred, so throw
    else {
        // This statement throws an error
        // directly to the catch block.
        throw "InvalidMonthNumber"
    }
}
//////////////////////////////////////////////////////
// The try block wraps around the main JavaScript
// The try block
try {
    // Call the getMonthName() function with an
    // invalid month # (there is no 13th month!)
    // and see what happens.
    alert(getMonthName(13))
    alert("We never get here if an exception is thrown.")
}
// The catch block
catch (error) {
    alert("An " + error + " exception was encountered. Please contact the program vendor.")
}

