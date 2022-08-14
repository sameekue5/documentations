window.onscroll = function() {
    OnWindowsScroll()
};

var header = document.getElementById("mainNav");
var sticky = header.offsetTop;


function OnWindowsScroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}