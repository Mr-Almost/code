$('.images>img:nth-child(1)').addClass('current')
$('.images>img:nth-child(2)').addClass('enter')
$('.images>img:nth-child(3)').addClass('enter')
$('.images>img:nth-child(4)').addClass('enter')
var imageNum=$('.images>img')
  var i=0;
setInterval(function(){
 $(imageNum).eq(i%imageNum.length).removeClass('current').addClass('leave')
     .one('transitionend', (e)=>{
      $(e.currentTarget).removeClass('leave').addClass('enter')
    })
 $(imageNum).eq((i+1)%imageNum.length).removeClass('enter').addClass('current');
 
  i=i+1;
},2000)

