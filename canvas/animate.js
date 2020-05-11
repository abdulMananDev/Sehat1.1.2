const laminate = document.querySelector('.laminate');
const canvas = document.querySelector('#animate_canvas');
canvas.style.backgroundColor='#fffff';
console.log(laminate.height);

// resizing canvas
console.log(canvas)
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

var c = canvas.getContext('2d');
//OOJ to instantiate a new circle

var Mouse = {
    x: undefined,
    y: undefined
}

const maxRadius = 60;


var colorArray = [
   '#FD7200',
   '#FF5314',
   '#6591A2',
   '#F9FEFD',
   '#1A435F'
];

window.addEventListener('mousemove', function (event){
// console.log(event);
Mouse.x=event.x;
Mouse.y=event.y;

// this event returns x and y values for the mouse pointer
// and then storing it to some object
});

window.addEventListener('resize',function(){
    canvas.width= window.innerWidth;
    canvas.height= laminate.innerHeight;
})

function Circle(x,y,dx,dy,radius){ //capital letter denotes its an object named circle of type function
    this.x  = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color= colorArray[Math.floor((Math.random() * colorArray.length))]
    this.draw = function(){
        c.beginPath();
        c.fillStyle =this.color;
        c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        c.strokeStyle= '#fff';
        c.stroke();
        c.fill();
    }
    this.update = function(){
        this.draw();
        if (this.x + this.radius > innerWidth  || this.x - this.radius <0){
            this.dx = -this.dx;
             
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius <0){
            this.dy = -this.dy;
             
        }

        if(Mouse.x - this.x < 50 && Mouse.x - this.x > -50 && Mouse.y - this.y < 50 && Mouse.y - this.y > -50){
            if(this.radius < maxRadius){
                this.radius+=1;
            }
        }
        else if(this.radius > this.minRadius){
            this.radius -=1;
        }
       
        this.x+=this.dx;
        this.y+=this.dy;

    }
}

// var circle = new Circle(200,200,20,20,100);

var circleArray = [];

for(var i =0; i< 800; i++){
    var radius = Math.random() * 16 +1;
    
    var x = Math.random() * (innerWidth - radius*2) + radius;
    
    var y = Math.random() * (innerHeight - radius*2) + radius;
    
    var dy = Math.random() -0.5;
    
    var dx =Math.random() -0.5; //velocity
    

    circleArray.push(new Circle(x,y,dx,dy,radius))
}







function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for (let i =0; i<circleArray.length; i++){
        circleArray[i].update()
    }
    // circle.update();
    

}
   
    
    

animate();
//https://www.freepik.com/premium-vector/web-design-development-isometric-landing-page_4896051.htm
