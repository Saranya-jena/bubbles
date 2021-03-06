var canvas=document.querySelector('canvas');
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height=window.innerHeight;
 var c = canvas.getContext('2d');
 


var mouse ={
    x: undefined,
    y : undefined
}
var maxRadius=50;
var minRad=7;
var colorArray=[
    '#2E112D',
    '#540032',
    '#820333',
    '#C9283E',
    '#F0433A'
];
window.addEventListener('mousemove',
function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    

})

window.addEventListener('resize',
function(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
init();
}
)

function Circle(x,y,dx,dy,radius){
this.x=x;this.y=y;
 this.dx=dx;
this.dy=dy;
this.radius=radius;
this.minRad=radius;
this.color=colorArray[Math.floor(Math.random()*colorArray.length)];

this.draw=function(){
c.beginPath();
c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
c.fillStyle=this.color;
c.fill();
}

this.update= function(){
    if (this.x+this.radius>innerWidth|| this.x -this.radius<0){
        this.dx=-this.dx;
    }
    if (this.y+this.radius>innerHeight|| this.y -this.radius<0){
        this.dy=-this.dy;
    }
    this.x +=this.dx;
    this.y +=this.dy;
    //interactivity
    if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50){
      
    
    if(this.radius<maxRadius)
    {
        this.radius+=1;
    }}
    else if(this.radius>minRad)
    {
        this.radius-=1;
    }

    this.draw();
}
}


function init(){
   
    for( var i=0;i<700;i++){
        var x =Math.random()*(innerWidth - radius*2)+radius;
        var y =Math.random()*(innerHeight-radius*2)+radius;
        var dx=(Math.random()-0.5)*2;
        var dy=(Math.random()-0.5)*2;
        var radius=Math.random()*6+1;
        circleArray.push(new Circle(x,y,dx,dy,radius));
        
    }
} var circleArray=[];
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }
    
}
init();
animate();