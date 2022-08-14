const ShaderTypes = [

    {
        title: 'Aquarelle',
        FullBlendSRC: 'https://player.vimeo.com/video/447150890?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447150995?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Basic Cel Shading',
        FullBlendSRC: 'https://player.vimeo.com/video/447151065?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447176067?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Billboard',
        FullBlendSRC: 'https://player.vimeo.com/video/447176086?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447176104?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Chalkboard',
        FullBlendSRC: 'https://player.vimeo.com/video/447178628?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447178749?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Circly',
        FullBlendSRC: 'https://player.vimeo.com/video/447178943?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447179101?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Colored Pencil',
        FullBlendSRC: 'https://player.vimeo.com/video/447179242?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447179381?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Comic Book',
        FullBlendSRC: 'https://player.vimeo.com/video/447179570?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447179724?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    }, ,
    {
        title: 'CrossStitch',
        FullBlendSRC: 'https://player.vimeo.com/video/447179895?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447180029?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Dithered Toon',
        FullBlendSRC: 'https://player.vimeo.com/video/447180185?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447180328?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Edge Detect',
        FullBlendSRC: 'https://player.vimeo.com/video/447368876?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447368906?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Four Bit Palette',
        FullBlendSRC: 'https://player.vimeo.com/video/447396910?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447396951?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Frosted Glass',
        FullBlendSRC: 'https://player.vimeo.com/video/447396987?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447397027?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Glossy Wax',
        FullBlendSRC: 'https://player.vimeo.com/video/447450213?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447476905?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Glowing Edge',
        FullBlendSRC: 'https://player.vimeo.com/video/447477004?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447476961?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Hand-Painted Art',
        FullBlendSRC: 'https://player.vimeo.com/video/447498041?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447498094?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Hexagon',
        FullBlendSRC: 'https://player.vimeo.com/video/447498152?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447575892?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Kuwahara',
        FullBlendSRC: 'https://player.vimeo.com/video/447575945?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/447576082?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',

    }, ,
    {
        title: 'N Palette',
        FullBlendSRC: 'https://player.vimeo.com/video/449638986?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/449639082?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Oil Paint',
        FullBlendSRC: 'https://player.vimeo.com/video/449639418?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/449639490?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Painted Kuwahara',
        FullBlendSRC: 'https://player.vimeo.com/video/449639576?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/449639606?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    }, ,
    {

        title: 'Pencil',
        FullBlendSRC: 'https://player.vimeo.com/video/449639821?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/449639903?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'Simple Dithering',
        FullBlendSRC: 'https://player.vimeo.com/video/449639969?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/449640015?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {
        title: 'ToonShade',
        FullBlendSRC: 'https://player.vimeo.com/video/449640093?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/449640236?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },
    {

        title: 'Water Color',
        FullBlendSRC: 'https://player.vimeo.com/video/449640353?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
        HalfBlendSRC: 'https://player.vimeo.com/video/449640414?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1',
    },


];



// function DisableScroll() {

//     $('body').addClass('Stop-Scrolling')
// }

// function EnableScroll() {
//     window.onscroll = function() {};
// }



// function SwitchTab(evt, tabID) {
//     // Declare all variables
//     var i, tabcontent, tablinks;

//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("Tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(tabID).style.display = "block";
//     evt.currentTarget.className += " active";

// }

// let parentdiv = document.getElementById('AOSTypesDiv');
// let template = document.getElementById('AOSTypesTemplate');

// DataBaseTypes.forEach(Products => {

//     const node = document.importNode(template.content, true);
//     node.getElementById('Title').innerHTML = Products.title;
//     node.getElementById('thumbnailImage').src = Products.src;
//     node.getElementById("ImageCardLink").href = "javascript:void(0)";
//     node.getElementById("ImageCardLink").onclick = function() { ResolveURL(Products.OfficialSite) };
//     parentdiv.appendChild(node);

// });

// function AppendProduct(product, parentdiv, template) {
//     const node = document.importNode(template.content, true);

//     var button = node.getElementById('SPPListButton');
//     button.innerHTML = product.title;

//     button.addEventListener("click", function() {

//         let shaderparentdiv = document.getElementById('SPPLightBoxParentDiv');
//         shaderparentdiv.innerHTML = "";
//         let shadertemplate = document.getElementById('SPPLightBoxTemplate');
//         const shadernode = document.importNode(shadertemplate.content, true);

//         var fullblendiframe = shadernode.getElementById("videofullblend");
//         var halfblendiframe = shadernode.getElementById("videohalfblend");

//         fullblendiframe.src = product.FullBlendSRC;
//         halfblendiframe.src = product.HalfBlendSRC;

//         shaderparentdiv.appendChild(shadernode);

//     }, false);
//     parentdiv.appendChild(node);
// }


// let template = document.getElementById('SPPListTemplate');

// let mainparentdiv = document.getElementById('MainSPPTypesList');
// SPPMainShaderTypes.forEach(Product => {

//     AppendProduct(Product, mainparentdiv, template);


// });

// let sceneparentdiv = document.getElementById('SceneSPPTypesList');

// SPPSceneShaderTypes.forEach(Product => {

//     AppendProduct(Product, sceneparentdiv, template);

// });

// document.getElementById("defaultOpen").click();



let maxproducts = 12;
let mincount = 0;

let startcount = 0;
let currentid = 1;

function ChangePage(id) {
    mincount = maxproducts * (id - 1);

    parent = document.getElementsByClassName('ShaderPages')[0];
    parent.children[currentid - 1].classList.remove("active");
    parent.children[id - 1].classList.add("active");

    currentid = id;
    AddProducts();
}

function compareImages(img) {
    var slider, img, clicked = 0,
        w, h;
    /*get the width and height of the img element*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    /*set the width of the img element to 50%:*/
    img.style.width = (w / 2) + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchend", slideFinish);

    function slideReady(e) {
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*the slider is now clicked and ready to move:*/
        clicked = 1;
        /*execute a function when the slider is moved:*/
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
    }

    function slideFinish() {
        /*the slider is no longer clicked:*/
        clicked = 0;
    }

    function slideMove(e) {
        var pos;
        /*if the slider is no longer clicked, exit this function:*/
        if (clicked == 0) return false;
        /*get the cursor's x position:*/
        pos = getCursorPos(e)
            /*prevent the slider from being positioned outside the image:*/
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /*execute a function that will resize the overlay image according to the cursor:*/
        slide(pos);
    }

    function getCursorPos(e) {
        var a, x = 0;
        e = e || window.event;
        /*get the x positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x coordinate, relative to the image:*/
        x = e.pageX - a.left;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        return x;
    }

    function slide(x) {
        /*resize the image:*/
        img.style.width = x + "px";
        /*position the slider:*/
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
}

function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
    }


}

divisor = document.getElementById("divisor2");
slider = document.getElementById("slider");

function moveDivisor() {
    divisor.style.width = slider.value + "%";
}

function OpenLightBox(Products) {

    let lightboxparentdiv = document.getElementById('LightBoxContentDiv');
    let lightboxtemplate = document.getElementById('SPPLightBoxTemplate');
    let lbnode = document.importNode(lightboxtemplate.content, true);
    lightboxparentdiv.innerHTML = '';
    var titlenode = lbnode.getElementById('Title');
    titlenode.innerHTML = Products.title;

    lightboxparentdiv.appendChild(lbnode);

    $('#LightBoxDiv').css("display", "block");
    $('body').addClass('stop-scrolling');

    moveDivisor();

}


document.getElementById("LightBoxDiv").addEventListener("click", function(event) {
    $('#LightBoxDiv').css("display", "none");
    $('body').removeClass('stop-scrolling');

});


function AddProducts() {
    let parentdiv = document.getElementById('SPPTypesDiv');
    parentdiv.innerHTML = "";

    let template = document.getElementById('SPPTypesTemplate');
    let count = 0;

    let maxcount = mincount + maxproducts;




    ShaderTypes.forEach(Products => {

        if (count >= mincount && count < maxcount) {
            const node = document.importNode(template.content, true);
            node.getElementById('Title').innerHTML = Products.title;

            node.getElementById("ImageCardLink").onclick = function() { OpenLightBox(Products) };

            parentdiv.appendChild(node);


        }

        count++;

    });



}


let pnparentul = document.getElementById('ShaderPageUL');
let pntemplate = document.getElementById('SPPNaviagationTemplate');

let maxpncount = 5;
let numberofpages = Math.ceil((ShaderTypes.length) / maxproducts);

let totalcount = Math.min(maxpncount, numberofpages);


function AddNavigation() {

    for (var i = 0; i < numberofpages; i++) {

        const pnnode = document.importNode(pntemplate.content, true);
        pnnode.getElementById('NavAnchor').innerHTML = i + 1;

        const x = i + 1;
        pnnode.getElementById('NavAnchor').onclick = function() { ChangePage(x) };
        var li = document.createElement("li");
        li.appendChild(pnnode);

        if (i === 0) {
            li.classList.add("active");
        }
        pnparentul.appendChild(li);

    }

}




AddProducts();
AddNavigation();
$('#LightBoxDiv').css("display", "none");