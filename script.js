console.log("hello world");

//defined variables
const speed = 2;
var myArray = [
    [10, 20]
];
color = "#000000";

document.onkeydown = function(e) {
    switch (e.key) {
        case 'ArrowUp':
            dirX = 0;
            dirY = 1;
            // console.log("arrow up");
            break;
        case 'ArrowDown':
            dirX = 0;
            dirY = -1;
            // console.log("arrow down");
            break;
        case 'ArrowLeft':
            dirX = -1;
            dirY = 0;
            // console.log("arrow left");
            break;
        case 'ArrowRight':
            dirX = 1;
            dirY = 0;
            // console.log("arrow right");
    }
};

window.addEventListener('load', function() {
    let mycanvas = document.getElementById('myCanvas');
    let ctx = mycanvas.getContext('2d');
    for (int i = 0; i < length(myArray); i++) {
        posx = myArray[0][0];
        posy = myArray[0][1];
        ctx.fillStyle = color;
        ctx.arc(posx, posy, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
    setInterval(fun, 50);
}, false);

const fun = function() {
    // console.log("hello world");


}