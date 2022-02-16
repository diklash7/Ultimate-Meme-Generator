'use strict';

renderGallery();

function renderGallery() {
    var imgs = getImgs();
    console.log(imgs);
    var strHTMLs = imgs.map((img) => {
        return `
<img class="img-gallery" src="${img.url}">
`
    })
    var elgallery = document.querySelector('.gallery');
    elgallery.innerHTML = strHTMLs.join('');
    console.log(strHTMLs)
}

