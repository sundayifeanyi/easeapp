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

function displayMenu(currentPosition, nextPosition) {
    var whichMenu = document.getElementById('#'+ currentPosition).style;
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