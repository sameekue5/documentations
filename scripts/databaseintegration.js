const DataBaseTypes = [

    {
        title: 'MySQL Integration for UE4',
        src: 'images/mysql/mysql.png',
        OfficialSite: 'products/dbintegration/mysql',
        DocDisplay: 'block',
        DiscordLinkDisplay: 'block'
    },

    {
        title: 'MSSQL Integration for UE4',
        src: 'images/mssql/mssql.png',
        OfficialSite: 'products/dbintegration/mssql',
        DocDisplay: 'block',
        DiscordLinkDisplay: 'block'
    },

    {
        title: 'PostgreSQL Integration for UE4',
        src: 'images/postgresql/postgresql.png',
        OfficialSite: 'products/dbintegration/postgresql',
        DocDisplay: 'block',
        DiscordLinkDisplay: 'block'
    }

];



let parentdiv = document.getElementById('DatabaseTypesDiv');
let template = document.getElementById('DataBaseTypeTemplate');

DataBaseTypes.forEach(Products => {

    const node = document.importNode(template.content, true);
    node.getElementById('Title').innerHTML = Products.title;
    node.getElementById('thumbnailImage').src = Products.src;
    node.getElementById("ImageCardLink").href = Products.OfficialSite;

    parentdiv.appendChild(node);

});