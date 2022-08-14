var vid = document.getElementById("FeaturedVideo");
vid.onended = function() {
    vid.currentTime = 2;
    $('#FeaturedVideoThumb').show();
    vid.style.display = 'none';
};

$('#FeaturedVideoThumb').on('click', function(ev) {
    $(this).hide();
    ev.preventDefault();

    vid.controls = true;
    vid.currentTime = 2;
    vid.style.display = 'block';

    vid.play();

});