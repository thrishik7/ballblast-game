var canvas =document.querySelector('canvas');
var c = canvas.getContext('2d');

var cancelMe="";
c.globalCompositerOperation='destination-over';
 var xc=500;

 var t=1;
 var r=Math.floor((Math.random() * 50) + 30);
var xc1=0;
var cy=530;
var s= Math.floor((Math.random() * 120) + 20);
if(s%2!=0)
      s++;
var cannon = new Image();
var blast = new Image();
blast.src='blast.png'
cannon.src='cannon.png';
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}

var h =Math.floor((Math.random()*200)+40);
 var yc1=h;
var t=2;
var i=0;
var d=620;
var a=1;
var b=1;var h1;
var yb=555;
var k=2;
var q=2;
var dx=0;
var dy=0;
var ti=0;
var dr=0;
var score=0;
var g=0;
var w=1;var w1=1;
var t3=1;
var bulletArray=[];
var bubbleArray=[];
var scoreArray=[];
var k1=1; var k2=0;
var Maxb=2;var Maxb1=1;
var SCORE=0;
var w2=0;
var gameendpic = new Image();
gameendpic.src='gameovergif.gif';
   init();
    function init() {
      if(localStorage.scoreRecord){
        SCORE=JSON.parse(localStorage.scoreRecord);
 }}
 
    c.fillStyle = 'yellow';
    c.font='90px Helvetica';
    c.fillText('START',320,350); 


function animateblock()
{ 
     cancelMe=requestAnimationFrame(animateblock);
     c.clearRect(0,0, innerWidth, innerHeight);
    
     document.getElementById("bmi").innerHTML="HIGH SCORE:"+SCORE;  
     window.addEventListener('keydown',move,false);
     c.fillStyle="orange"; 
     c.fillStyle="black";c.fillStyle="black";
     c.drawImage(cannon,xc,565);

    w=w+t3;
    k2=10
    if(w>=30)
    {
     Maxb++; 
     if(bulletArray.length<Maxb)
     {
      bulletArray.push({x:xc+40, y:yb, rb: 5 });
     }
    w=1;
    if(k1%500==0)
{
  t3++;
}

    }
    w1++;
    if(w1==700)
   {
    Maxb1++; 
    if(bubbleArray.length<Maxb1)
   {

     r=Math.floor((Math.random() * 50) + 30);
     s= Math.floor((Math.random() * 120) + 20);
     if(s%2!=0)
      s++;
     h=Math.floor((Math.random()*200)+40);
      yc1=h;
      t=2;
      xc1=0;
      a=1;b=1; 
      letters = '0123456789ABCDEF';
      color = '#';
    for (var i = 0; i < 6; i++) {
   color += letters[Math.floor(Math.random() * 16)];
}  

    bubbleArray.push({x1:xc1, y1:yc1, r1: r ,s1:s , t1:t, h11:h, a1:a, b1:b, color1:color});
    scoreArray.push({s1:s });
  }w1=1;}



 for(var i=0; i<bubbleArray.length;i++){
   c.beginPath();
   c.arc(bubbleArray[i].x1, bubbleArray[i].y1,bubbleArray[i].r1, 0, Math.PI * 2, false); 
    c.fillStyle = bubbleArray[i].color1;
    c.fill();
    c.fillStyle="#ffffff"; c.font='30px Helvetica';
   c.fillText(bubbleArray[i].s1,(bubbleArray[i].x1)-20,(bubbleArray[i].y1)+5);
 bubbleArray[i].x1+=bubbleArray[i].b1*bubbleArray[i].t1;
h1=bubbleArray[i].h11-20;
bubbleArray[i].y1+=bubbleArray[i].a1*Math.pow(bubbleArray[i].t1,2);
 if(bubbleArray[i].y1>=600)
 bubbleArray[i].a1=-1;
 if(bubbleArray[i].y1<=h1)
bubbleArray[i].a1=1;

if(bubbleArray[i].x1>=950-bubbleArray[i].r1)
bubbleArray[i].b1=-1;
if(bubbleArray[i].x1<=0+bubbleArray[i].r1)
bubbleArray[i].b1=1;




}
 for(var i=1; i<bulletArray.length;i++){

    
    c.fillStyle="black";
    c.beginPath();
    c.arc(bulletArray[i].x,bulletArray[i].y,bulletArray[i].rb,  0, Math.PI * 2,false);
    c.fill(); 
   
      bulletArray[i].y=bulletArray[i].y-7;
  

     
  }       
for(var i=1; i<bulletArray.length;i++){
 if(  bulletArray[i].y<=0  )
   {
    bulletArray.splice(0,i);
    
   }}



 




 for(var j=0; j<bulletArray.length;j++){
for(var i=0; i<bubbleArray.length;i++){

        dx= Math.pow(bubbleArray[i].x1-bulletArray[j].x, 2);
        dy= Math.pow(bubbleArray[i].y1-bulletArray[j].y, 2);
        dr= Math.pow(bubbleArray[i].r1+5, 2);
       

    if(dx+dy<=dr)
    {  

      bubbleArray[i].s1=(bubbleArray[i].s1)-(2);
      
     console.log(bubbleArray.length); bulletArray.splice(j,1);
     
 if(  bubbleArray[i].s1<=0  )
   {
     if(bubbleArray[i].r1>40){
     r=(bubbleArray[i].r1)/2 ;
   s= scoreArray[i].s1/2; 
        
    h=(bubbleArray[i].y1)-100 ;
    yc1=bubbleArray[i].y1;
    t=2;
    xc1=(bubbleArray[i].x1)+30;
   a=1;
   b=1;
     r1=(bubbleArray[i].r1)/2 ;
   s1= scoreArray[i].s1/2; 
 
    h1=(bubbleArray[i].y1)-100 ;
    yc11=bubbleArray[i].y1;
    t1=2;
    xc11=(bubbleArray[i].x1)-50;
   a1=1;
   b1=1;
   bubbleArray.splice(i,1);
   scoreArray.splice(i,1);
 letters = '0123456789ABCDEF';
color = '#';
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
    
  bubbleArray.push({x1:xc1, y1:yc1, r1: r ,s1:s , t1:t, h11:h, a1:a, b1:b , color1:color});
  scoreArray.push({s1:s });
  bubbleArray.push({x1:xc11, y1:yc11, r1: r1,s1:s1 , t1:t1, h11:h1, a1:a1, b1:b1, color1:color});
  scoreArray.push({s1:s1 });
 
 }
  else
    { bubbleArray.splice(i,1);
      console.log(bubbleArray.length);
      scoreArray.splice(i,1);
     
    }}
  score+=4; 
  k1+=4;
       }

    
}}

for(var i=0; i<bubbleArray.length;i++){

if(( Math.abs(bubbleArray[i].y1-565)<=(bubbleArray[i].r1-20) && (bubbleArray[i].x1>=(xc) && bubbleArray[i].x1<=(xc+50)))||( Math.abs(bubbleArray[i].x1-xc)<=(bubbleArray[i].r1-20) && (bubbleArray[i].y1>=(650) && bubbleArray[i].y1<=(595)))||(Math.abs(bubbleArray[i].y1-565)==(Math.sqrt(2)*bubbleArray[i].r1) && Math.abs(-(xc+50)+bubbleArray[i].x1)==(Math.sqrt(2)*bubbleArray[i].r1)))
  { 
      cancelAnimationFrame(cancelMe);

     c.fillStyle="black";
     c.fillRect(0, 400,950, 270);
     c.fill();
      if(xc<=300)
      c.drawImage(gameendpic,420,300);
    if(xc>300)
      c.drawImage(gameendpic,40,300);
 
  if(score>=SCORE)
  {
  SCORE=score;
  document.getElementById("bmi").innerHTML="HIGH SCORE:"+SCORE;  
 }

     

  }




}

c.fillStyle="#ffffff";
  c.fillRect(400, 10,220, 50);
     c.fill();
    c.fillStyle = '#ff00ff';
    c.font='30px Helvetica';
    c.fillText('SCORE :'+score,420,40); 

   
   var scoreObj=SCORE;
   localStorage.scoreRecord=JSON.stringify(scoreObj);





}

  



function move(e)
{ 


  if(e.keyCode==65|| e.keyCode==37)
    xc-=10;
 

   if(e.keyCode==68|| e.keyCode==39)  
       xc+=10;
       
        
}

function restart()
{


 xc=500;

 t=1;
 r=Math.floor((Math.random() * 50) + 30);
xc1=0;
cy=530;
s= Math.floor((Math.random() * 120) + 20);
if(s%2!=0)
      s++;
cannon = new Image();
blast = new Image();
blast.src='blast.png'
cannon.src='cannon.png'; h =Math.floor((Math.random()*200)+40);
 yc1=h;
t=2;t3=0;
i=0;
d=620;
a=1;b=1; h1;
yb=555; k=2;k2=0;
 q=2;
 dx=0;
 dy=0;
 dr=0;ti=0;
 score=0;
 g=0;
 w=1; w1=1;
bulletArray=[];
bubbleArray=[];
scoreArray=[];
 k1=0;
 Maxb=2; Maxb1=1;
letters = '0123456789ABCDEF'; color = '#';
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
w2=0;
 gameendpic = new Image();

animateblock();

}
function animateblock1()
{
  cancelAnimationFrame(cancelMe);animateblock();
}

function pause()
{
  cancelAnimationFrame(cancelMe);
}
