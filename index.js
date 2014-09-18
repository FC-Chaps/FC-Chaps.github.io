$(document).ready(function(){ 
$('.PersonalPicture').mouseover(function(){
  $(this).css("height",315).css("width",210).css("box-shadow","0 0 10px black").css("border-color","#9ecaed")
});
  $('.PersonalPicture').mouseleave(function(){
  $(this).css("height",300).css("width",200).css("border-style","none").css("box-shadow","none")
  });
});
