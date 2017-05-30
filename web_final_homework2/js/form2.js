   function start(){

    var array=new Array();

    var canvas=document.getElementById("mycanvas");

    var context=canvas.getContext("2d");

    for(var i=0;i<50;i++){

     var Showsnow=new showsnow();

     array.push(Showsnow);

     }

    
    time=setInterval(function (){

     context.clearRect(0,0,canvas.width,canvas.height);
     for(var i=0;i<array.length;i++){

      
      array[i].move();
      array[i].draw(context);

     }

    },500);

   }
   function showsnow(){
    var y=parseInt(Math.random()*50)*10;

    var x=parseInt(Math.random()*80)*10;

    this.draw=function(context){
    context.font="50px Calibri";
    context.fillText("*",x,y);
    context.fillStyle="white";
    
    }
    this.move=function(){
     y+=20;

     if(y>600){
      y=0;
     }
    }
   }