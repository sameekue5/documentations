const FeaturedProducts = [

    {
        title: '<h6 class = "CardOverlayText2">Runtime</h6><h6  class = "CardOverlayText1">FBX Import</h6>',
        src: 'images/thumbnails/fbximport.png',
        OfficialSite: 'products/runtimefbximport',

    },

    {
        title: '<h6  class = "CardOverlayText1" style = "margin-left:-10%; margin-top:4%;">FrameCapture</h6>',
        src: 'images/thumbnails/framecapture.png',
        OfficialSite: 'products/framecapture',
    },

    {
        title: '<h6  class = "CardOverlayText1" style = "margin-left:-10px;  margin-top:4%;">Microsoft SQL</h6><h6 class = "CardOverlayText2" style = "margin-left:-30px; margin-right:-20px;">Integration for Unreal</h6>',
        src: 'images/thumbnails/mssql.png',
        OfficialSite: 'products/databaseintegration/mssql',
    },


    {

        title: '<h6  class = "CardOverlayText2">Art of Shader - </h6><h6 class = "CardOverlayText1">Stylized Post Process</h6>',
        src: 'images/artofshader/stylizedpostprocess/stylizedthumbnail.png',
        OfficialSite: 'products/aos/stylizedpostprocess',
    },

    {
        title: '<h6  class = "CardOverlayText1" style = "margin-left:10px;  margin-top:4%;">Mysql</h6><h6 class = "CardOverlayText2" style = "margin-left:-20px; margin-right:-20px;">Integration for Unreal</h6>',
        src: 'images/thumbnails/mysql.png',
        OfficialSite: 'products/databaseintegration/mysql',
    },

    {
        title: '<h6  class = "CardOverlayText2" style = "margin-left:-6%;">Minimap, Map and</h6><h6 class = "CardOverlayText1" style = "margin-left:-6%;"> Navigation</h6>',
        src: 'images/thumbnails/mapsystem.png',
        OfficialSite: 'products/minimapandmap',
    }

];



let parentdiv = document.getElementById('FeatureProductsDiv');
let template = document.getElementById('FeatureProducts');

FeaturedProducts.forEach(Products => {

    const node = document.importNode(template.content, true);
    node.getElementById('Title').innerHTML = Products.title;
    node.getElementById('thumbnailImage').src = Products.src;
    node.getElementById("ImageCardLink").href = Products.OfficialSite;
    parentdiv.appendChild(node);


    parentdiv.appendChild(node);

});