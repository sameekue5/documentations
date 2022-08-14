var coll = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


$('.video').parent().click(function() {
    if ($(this).children(".video").get(0).paused) {
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
    } else {
        $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});