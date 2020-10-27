window.onload=function(){
   
    var c=document.getElementById("rainbow");
    var pen=c.getContext("2d");

    pen.beginPath();                        
    pen.arc(75,75,70,0,Math.PI,true);
    pen.fillStyle="red";   
    pen.fill();
    pen.closePath();

    
    pen.beginPath();                        
    pen.arc(75,75,60,0,Math.PI,true);
    pen.fillStyle="orange";   
    pen.fill();
    pen.closePath();

    
    pen.beginPath();                        
    pen.arc(75,75,50,0,Math.PI,true);
    pen.fillStyle="yellow";   
    pen.fill();
    pen.closePath();

    
    pen.beginPath();                        
    pen.arc(75,75,40,0,Math.PI,true);
    pen.fillStyle="green";   
    pen.fill();
    pen.closePath();

    
    pen.beginPath();                        
    pen.arc(75,75,30,0,Math.PI,true);
    pen.fillStyle="blue";   
    pen.fill();
    pen.closePath();

    
    pen.beginPath();                        
    pen.arc(75,75,20,0,Math.PI,true);
    pen.fillStyle="indigo";   
    pen.fill();
    pen.closePath();

    
    pen.beginPath();                        
    pen.arc(75,75,10,0,Math.PI,true);
    pen.fillStyle="violet";   
    pen.fill();
    pen.closePath();
    

    var car1=document.getElementById("car1");
    var car2=document.getElementById("car2");
    var car3=document.getElementById("car3");
    pen.drawImage(car1,-100,100);
    pen.drawImage(car2,100,100);
    pen.drawImage(car3,200,100);
}