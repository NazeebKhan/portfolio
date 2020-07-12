var typeString = ["I'M a Computer Teacher", "I'M a Software Engineer", "Best Communicator", "A Poet", "A Web Designer"];
var i = 0;
var count = 0;
var selectedText = "";
var text = "";
(function type() {
    if (count == typeString.length) {
        count = 0;
    }
    selectedText = typeString[count];
    text = selectedText.slice(0, ++i);
    document.getElementById('typing').innerHTML = text;
    if (text.length === selectedText.length) {
        count++;
        i = 0;
    }

    setTimeout(type, 250);
}());

var canvas = document.querySelector('.can1');
canvas.width = window.innerWidth - 320
canvas.height = window.innerHeight
var c = canvas.getContext('2d')


function Circle(x, y, dx, dy, radius) {
    this.x = x; this.y = y; this.dx = dx; this.dy = dy; this.radius = radius;
    this.draw = function () {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.random() * 360, false)
        c.fillStyle = "rgb(" + Math.random() * 225 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")"
        //c.fillStyle = 'blue'
        c.fill()
        //c.strokeStyle='blue'
        //c.stroke()
    }
    this.update = function () {
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
            this.dx *= -1
        }

        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
            this.dy *= -1
        }

        this.x += this.dx
        this.y += this.dy
        this.radius = Math.random() * 20 + 1
        //this.radius = radius
        this.draw()
    }
}

var circleArray = []

for (var i = 0; i < 100; i++) {
    var x = Math.random() * canvas.width, y = Math.random() * canvas.height, dx = Math.random() * 4, dy = Math.random() * 4, radius = Math.random() * 30
    circleArray.push(new Circle(x, y, dx, dy, radius))
}


var circle1 = new Circle(x, y, dx, dy, radius)
function animate() {

    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    circleArray.forEach(circle => {
        circle.update()
    });

}

animate();


var canvas1 = document.querySelector('#can2');
canvas1.width = window.innerWidth
canvas1.height = window.innerHeight/4
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(20, 20, 150, 100);
ctx.stroke();