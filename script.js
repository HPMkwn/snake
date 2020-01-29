console.log("hello world");
//defined variables
let dirX = 1;
let dirY = 0;
const myArray = [
    [10, 20],
    [20, 20],
    [30, 20]
];
const bcolor = '#000000';
const wcolor = '#111111';
document.onkeydown = function(e) {
    switch (e.key) {
        case 'ArrowUp':
            dirX = 0;
            dirY = -1;
            // console.log("arrow up");
            break;
        case 'ArrowDown':
            dirX = 0;
            dirY = 1;
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

    const a = [1, 2, 3, 4, 5];
    const b = a + 5;
    console.log(b);
    setInterval(fun, 50);
}, false);

const fun = function() {
    // console.log("hello world");
    this.mycanvas = document.getElementById('myCanvas');
    this.ctx = mycanvas.getContext('2d');
    mycanvas.width = mycanvas.width;
    height = mycanvas.height;
    width = mycanvas.width;
    this.speed = 2;
    this.color = "#000000";

    increment_snake();
    print_snake(this.ctx, this.mycanvas);


}

const increment_snake = function() {
    myArray.pop();
    myArray.unshift([myArray[0][0] + dirX * 10, myArray[0][1] + dirY * 10]);
    return myArray;
}
const print_snake = function(ctx, height, width) {
    for (i = 0; i < myArray.length; i++) {
        myArray[i][0] += dirX * 10;
        myArray[i][1] += dirY * 10;
        if (!check(myArray[i])) {
            posx = myArray[i][0];
            posy = myArray[i][1];
            ctx.fillStyle = bcolor;
            ctx.arc(posx, posy, 5, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}

const check = function(p, height, width) {
    return (p[0] > 0 && p[1] > 0 && p[0] < height && p[1] < width);
}