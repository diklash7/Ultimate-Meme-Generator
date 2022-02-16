var gCanvas;
var gCtx;


function init() {
    renderMeme();
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    // drawImg();
    drawImg2();
}

// todo renders an image on the canvas and a line of text on top
function renderMeme() {
    var meme=getMeme()
    console.log(meme);
    const strHTML = `
        <canvas id="my-canvas" width="500" height="500" style="outline:2px solid blue"></canvas>
    <img src="img/3.jpg" alt="" style="display:none;">
    `
    document.querySelector('.select-container').innerHTML = strHTML
}




function drawImg2(img) {
    console.log('hi', img)
    var img = new Image();
    img.onload = () => {
      gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    };
    img.src = 'img/3.jpg';
  
  }



function drawImg() {
    var elImg = document.querySelector('img');
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
}