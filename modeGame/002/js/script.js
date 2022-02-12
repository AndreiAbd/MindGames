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
//Cheack Function
function cheackResult() {
    if (document.getElementById("numberValue").value != 28) { // SAVE Buttom on Click , Alret cloesed after 5 sec
        document.getElementById("alertMsg").style.display = 'block';
        setTimeout(() => (document.getElementById("alertMsg").style.display = 'none'), 2000);
    } else {
        document.getElementById('winnerScreen').style.display = 'block';
    }
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