document.onreadystatechange = function() {
    var state = document.readyState;
    if (state === 'interactive') {
        document.getElementById('contents').style.visibility = "hidden";
    } else if (state === 'complete') {
        setTimeout(function() {
            document.getElementById('interactive');
            document.getElementById('loader').style.visibility = "hidden";
            document.getElementById('Contents').style.visibility = "visible";
        }, 1000);

    }

};

function ResolveDocumentationURL(urlpath) {
    var servername = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? 'http://localhost/Website_AthianGames/Documentations/' : 'https://docs.athiangames.com/';
    var newurlpath = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? urlpath + '.html' : urlpath;
    var url = servername + newurlpath;
    window.location = url;
}

function ResolveURL(urlpath) {
    var url = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? urlpath + ".html" : urlpath;
    window.location = url;
}

function ResolveHomePageURL(urlpath) {
    var url = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? "index.html" : urlpath;
    window.location = url;
}



$(function() {
    $.each(document.images, function() {
        var this_image = this;
        var src = $(this_image).attr('src') || '';
        if (!src.length > 0) {
            var lsrc = $(this_image).attr('lsrc') || '';
            if (lsrc.length > 0) {
                var img = new Image();
                img.src = lsrc;
                $(img).load(function() {
                    this_image.src = this.src;
                });
            }
        }
    });
});