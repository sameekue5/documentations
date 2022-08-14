const DataBaseTypes = [

    {
        title: 'Stylized Post Process',
        src: 'images/artofshader/stylizedpostprocess/stylizedthumbnail.png',
        OfficialSite: "products/aos/stylizedpostprocess",
        DocDisplay: 'block',
        DiscordLinkDisplay: 'block'
    },
    {
        title: 'Film And Special Effects',
        src: 'images/artofshader/filmandspecialeffects/fsethumbnail.jpg',
        OfficialSite: "products/aos/filmandspecialeffects",
        DocDisplay: 'block',
        DiscordLinkDisplay: 'block'
    }

];



let parentdiv = document.getElementById('AOSTypesDiv');
let template = document.getElementById('AOSTypesTemplate');

DataBaseTypes.forEach(Products => {

    const node = document.importNode(template.content, true);
    node.getElementById('Title').innerHTML = Products.title;
    node.getElementById('thumbnailImage').src = Products.src;
    node.getElementById("ImageCardLink").href = "javascript:void(0)";
    node.getElementById("ImageCardLink").onclick = function() { ResolveURL(Products.OfficialSite) };
    parentdiv.appendChild(node);

});