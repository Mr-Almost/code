
$('.float').hide();
let a=-1;
console.log(a)
$('button').on('click',function(e){
  a=-a;
  if(a>0)
 {
  $('.float').show();
 }else {
  $('.float').hide();
 }
  
  console.log(a)
  e.stopPropagation(); 
})





$('.float').on('click',function(e){

      e.stopPropagation(); 
})


$('html').on('click',function(e){
    $('.float').hide()
    a=-1;

})