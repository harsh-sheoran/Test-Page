const menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".smView");
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    document.querySelector("nav").classList.toggle("navbg");
    document.querySelector("body").classList.toggle("overflow-hidden");
});

let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
