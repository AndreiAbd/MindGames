/* Powered | CoderX | Andrei Abd
█▀▀ █▀█ █▀▄ █▀▀ █▀█ ▀▄▀
█▄▄ █▄█ █▄▀ ██▄ █▀▄ █░█
CODER X |تم تصميم الموقع و برمجته من قبل اندريه عبد
mail      :  usr.g0a1@gmial.com
Whatsapp  :  +963934820511
Pinterest :  https://www.pinterest.com/andreiabd93/
Instagram :  https://www.instagram.com/andrei_abd/
Linkeden  :  https://www.linkedin.com/in/andreiabd
Facebook  :  https://www.facebook.com/andreiaabd/
Github    :  https://github.com/AndreiAbd
*/
let
    scrMsg = document.getElementById("screenMsg");

scrMsg.innerHTML = "Search Result...";

//Clicks Functions
function noThingFound() {
    scrMsg.innerHTML = "Nothig Found There";
    setTimeout(
        function noThingFound() {
            scrMsg.innerHTML = "Try again ...";
        }, 1500
    );
}

function needleFounded() {
    scrMsg.innerHTML = "You Found The Needle";
    setTimeout(document.getElementById("winnerScreen").style.display = 'block', 2000)
}
//Close Pop Screen
function closePopScreen() {
    window.location.href = '../../index.html';
}
//Get Current Year
const d = new Date();
document.getElementById("getCurrentYear").innerHTML = d.getFullYear()

//Loader Page
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});
//Disable Right Mouse Click
document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener("keydown", (e) => {
    // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
    // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
    // THIS WILL ONLY DISABLE CONTROL AND F12
    if (e.ctrlKey || e.keyCode == 123) {
        e.stopPropagation();
        e.preventDefault();
    }
});