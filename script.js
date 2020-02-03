console.log("hello world");
//defined variables
let score = 0;
let dirX = 1;
let dirY = 0;
let height = 1000;
let width = 1000;
let myArray = [
    [60, 20],
    [50, 20],
    [40, 20],
    [30, 20],
    [20, 20],
    [10, 20]
];
const bcolor = '#000000';
const wcolor = '#111111';

let X = 250;
let Y = 250;

const startagain = function() {
    const over = document.getElementById('game-over');
    over.style.display = 'none';
    const canvas = document.getElementById('myCanvas');
    canvas.style.display = 'block';
    fun();
}

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


const fun = function() {
    // console.log("hello world");
    this.mycanvas = document.getElementById('myCanvas');
    this.ctx = mycanvas.getContext('2d');
    mycanvas.width = mycanvas.width;
    height = mycanvas.height;
    width = mycanvas.width;
    this.speed = 2;
    this.color = "#000000";


    // print_food(this.ctx, this.mycanvas);
    draw(this.ctx, this.mycanvas);


}
const food = function() {
    X = Math.floor(Math.random() * height);
    console.log(X);
    Y = Math.floor(Math.random() * width);
    console.log(Y);
}

const increment_snake = function() {
    myArray.pop();
    myArray.unshift([myArray[0][0] + dirX * 10, myArray[0][1] + dirY * 10]);
}
const print_food = function() {
    ctx.fillStyle = bcolor;
    ctx.beginPath();
    ctx.arc(X, Y, 5, 0, 2 * Math.PI);
    ctx.fill();
}


const check = function(p) {
    return (p[0] <= 0 || p[1] <= 0 || p[0] >= height || p[1] >= width);
}

const draw = function(ctx, canvas) {
    ctx.fillStyle = bcolor;
    for (i = 0; i < myArray.length; i++) {
        ctx.beginPath();
        ctx.arc(myArray[i][0], myArray[i][1], 5, 0, 2 * Math.PI);
        ctx.fill();
    }
    if ((myArray[0][0] < (X + 3) && myArray[0][0] > (X - 3)) && (myArray[0][1] < (Y + 3) && myArray[0][1] > (Y + 3))) {
        score++;
        console.log(score);
        // myArray.push([myArray[myArray.length - 1][0] - dirX * 10, myArray[myArray.length - 1][1] - dirY * 10]);
        food();
    }
    increment_snake();
    print_food();

    if (check(myArray[0])) {
        //game over';
        const over = document.getElementById('game-over');
        over.style.display = 'block';
        const canvas = document.getElementById('myCanvas');
        canvas.style.display = 'none';
        myArray = [
            [60, 20],
            [50, 20],
            [40, 20],
            [30, 20],
            [20, 20],
            [10, 20]
        ];
        dirX = 1;
        dirY = 0;
    }
}

const game = setInterval(fun, 50);