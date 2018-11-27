'use strict';

let state = {
    down: false,
    color: "black"
};
const canvas = document.getElementById('canvas'); 


const c = canvas.getContext('2d'); 
c.lineCap = 'round';

canvas.addEventListener('mousedown', function (e) {
    state.down = true;
    c.strokeStyle = state.color;
    c.beginPath();
    c.lineTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", function (e) {
    if (state.down === false) {
        c.closePath();
    } else {
        c.lineTo(e.offsetX, e.offsetY);
        c.stroke();
    }
});

canvas.addEventListener("mouseup", function (e) {
    state.down = false;
    c.lineTo(e.offsetX, e.offsetY);
    c.closePath();
});


// save image
let save = document.getElementById('save-btn');
save.addEventListener('click', function() {
    let image = canvas.toDataURL();
    let dl = document.createElement('a');
    dl.setAttribute('download', 'image.png');
    dl.setAttribute('href', canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
    dl.style.display = 'none';
    document.body.appendChild(dl);
    dl.click();
    document.body.removeChild(dl);
    //document.getElementById('myImage').src = image;

    //window.open(document.getElementById('myImage').toDataURL);

});
// clear imae
let getClear = document.getElementById('clear-btn');
getClear.addEventListener('click', function() {
    c.clearRect(0, 0, 700, 350);
});
