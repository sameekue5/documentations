const ShaderDetails = [

    {
        title: '<h6  class = "ShaderDetailsTitle">Adaptive Sharpen</h6>',
        src: 'images/thumbnails/fbximport.png'

    }


];



let parentdiv = document.getElementById('ShaderDetailsDiv');
let template = document.getElementById('ShaderDetails');

ShaderDetails.forEach(Products => {

    const node = document.importNode(template.content, true);
    node.querySelector('.title').innerHTML = Products.title;
    newFunction(node, Products);

    parentdiv.appendChild(node);

});



function newFunction(node, Products) {
    node.getElementById("thumbnailImage").src = Products.src;
}