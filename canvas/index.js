// creating canvas
const canvas = document.querySelector('#animate_canvas');

console.log('Canvas are amazing');

// canvas.style.backgroundColor='coral';
// resizing canvas

canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

var context = canvas.getContext('2d');


// get context reurn all the object(methods and props) 

// creating a square
context.fillStyle='#fff'; //creating fill
context.fillRect(100,100,50,50);
context.fillRect(200,100,50,50);
context.fillRect(150,150,50,50);


// x-coord, y-coord, height, width


//  creating a line

context.beginPath(); //starting a path 
context.moveTo(300,300); // initial-point line coordinates
context.lineTo(600,300); // endpoint
context.lineTo(450,200);
context.lineTo(300,300);
context.strokeStyle= 'rgb(255,255,58)';
context.stroke();  //creating the stroke from strat to end


// creating an arc(circle here)

// starting an new path an endign the previous one
context.beginPath();
context.arc(500, 500, 60, 0, Math.PI *2, false);
// center-x, center-y, radius, starting point on the circumfrence in radians(!important) , ending point in radians
context.stroke();

// creating multiple circles

for(let i = 0; i<5; i++){
    let x = Math.random()* innerWidth;
    let y = Math.random()* innerHeight;
    let red = Math.random()* 255;
    let blue = Math.random()* 255;
    let green = Math.random() *255;
    
    context.beginPath();
    context.arc(x, y, 60,0,Math.PI * 2);
    context.strokeStyle = `rgb(${red},${blue},${green})`;
    context.stroke();
}







