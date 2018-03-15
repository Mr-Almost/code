
var yyy=document.getElementById('xxx');
var context =yyy.getContext('2d');
var lineWidth=5;
autoSetCanvasSize(yyy);
listenToUser (yyy);

var Eraserstate=false;
var usingEraser=false;

eraser.onclick=function(){
Eraserstate=true;
eraser.classList.add('active');
brush.classList.remove('active');
};


brush.onclick=function(){
Eraserstate=false;
brush.classList.add('active');
eraser.classList.remove('active');
};

black.onclick=function(){
  context.fillStyle='black';
  context.strokeStyle='black';
  black.classList.add('active');
  red.classList.remove('active');
  green.classList.remove('active');
  blue.classList.remove('active');
  }

red.onclick=function(){
context.fillStyle='red';
context.strokeStyle='red';
black.classList.remove('active');
red.classList.add('active');
green.classList.remove('active');
blue.classList.remove('active');
}

green.onclick=function(){
context.fillStyle='green';
context.strokeStyle='green';
black.classList.remove('active');
red.classList.remove('active');
green.classList.add('active');
blue.classList.remove('active');
  }

 blue.onclick=function(){
  context.fillStyle='blue';
  context.strokeStyle='blue';
  black.classList.remove('active');
  red.classList.remove('active');
 green.classList.remove('active');
 blue.classList.add('active');  
  }

  thin.onclick =function(){
    lineWidth=5;

  }
  
  thick.onclick =function(){
    lineWidth=10;
  };

  clear.onclick =function() {
    context.clearRect(0,0, yyy.width,yyy.height);
  }
  download.onclick=function(){
    var url =  yyy.toDataURL("image/png");
   
    var a= document.createElement('a');
    document.body.appendChild(a);
    a.href=url;
    a.download= '我的作品';
    a.target='_blank' ;
    a.click();
   
  }

/*
context.strokeStyle='yellow';
context.strokeRect(10,10,100,100); //描边

context.fillStyle='blue';
context.fillRect(10,10,100,100); //填充

context.clearRect(50,50,10,10);   //橡皮擦  Rect:矩形

context.fillStyle ='green';     //绘制三角形
context.beginPath();
context.moveTo(240,240);
context.lineTo(300,240);
context.lineTo(300,300);
context.fill();
*/

function listenToUser (yyy){
  
  //特性检测
  if(document.body.ontouchstart !== undefined) //触屏设备 
{
  //触屏设备支持多点触屏，所以touch的x和y属性会被藏起来
  yyy.ontouchstart =function(aaa){
    var x=aaa.touches[0].clientX;
    var y=aaa.touches[0].clientY;
    if(Eraserstate){
      usingEraser=true;
      context.clearRect(x-5,y-5,10,10);

    }else{
    painting=true;
    lastPoint ={"x":x,"y":y};
    drawCircle(x,y,1);
  
  }
  }

  yyy.ontouchmove =function(aaa){

    var x=aaa.touches[0].clientX;
    var y=aaa.touches[0].clientY;
    if(Eraserstate){
       if(usingEraser)
        context.clearRect(x-5,y-5,10,10);
    }else{
       if(painting){
        var newPoint={"x":x,"y":y};
        drawCircle(x,y,1);
        drawline(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
        lastPoint=newPoint;
        }
    }
  
  }
  
  yyy.ontouchend =function(aaa){

    if(Eraserstate){
      usingEraser=false;
 
    }else{
 
      painting=false;
    }
    };


  

}else{



  var painting =false;
  var lastPoint= {"x":undefined,"y":undefined};
  
  yyy.onmousedown =function(aaa){

    var x=aaa.clientX;
    var y=aaa.clientY;
    if(Eraserstate){
      usingEraser=true;
      context.clearRect(x-5,y-5,10,10);

    }else{
    painting=true;
    lastPoint ={"x":x,"y":y};
    drawCircle(x,y,1);
  
  }

};


yyy.onmousemove=function(aaa){
  var x=aaa.clientX;
  var y=aaa.clientY;
  if(Eraserstate){
     if(usingEraser)
      context.clearRect(x-5,y-5,10,10);
  }else{
     if(painting){
      var newPoint={"x":x,"y":y};
      drawCircle(x,y,1);
      drawline(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
      lastPoint=newPoint;
      }
  }

};

yyy.onmouseup =function(aaa){
  if(Eraserstate){
       usingEraser=false;
  
  }else{
  
       painting=false;
  }
  };

}
}




function drawCircle(x,y,radius){
  context.beginPath();
  context.arc(x,y,radius,0,Math.PI*2);
  context.fill();
}



function drawline(x1,y1,x2,y2){
      context.beginPath();
      context.moveTo(x1,y1);
      context.lineWidth =lineWidth;
      context.lineTo(x2,y2);
      context.stroke();
      context.closePath();
      
}

function autoSetCanvasSize(canvas){
setCanvasSize();
window.onresize=function(){
  setCanvasSize();
};
function setCanvasSize(){
  var pageWidth =document.documentElement.clientWidth;
  var pageHeight =document.documentElement.clientHeight;
  canvas.width=pageWidth;
  canvas.height=pageHeight;
}

}





