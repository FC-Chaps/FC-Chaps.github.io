$(document).ready(function(){ 
  $('.PersonalPicture').mouseover(function(){
  $(this).css("height",253).css("width",380).css("box-shadow","0 0 10px black").css("border-color","#9ecaed")
});
  $('.PersonalPicture').mouseleave(function(){
  $('.PersonalPicture').css("height",240).css("width",360).css("border-style","none").css("box-shadow","none").css("visibility","visible").css("opacity",1)
  $('p').css("visibility","hidden").css("position","absolute")
  });
});

$(document).ready(function(){ 
 $('#pictureWill').click(function(){
  $('#pictureHarry').css("visibility","hidden")
  $('#pictureBenji').css("visibility","hidden")
  $('#pictureMarc').css("visibility","hidden")
   $('#pictureWill').css("width",792).css("height",528).fadeTo( "slow", 0.33 )
   $('#infoWill').css("visibility","visible").css("position","relative").css("text-align","center")
 });
 $('#pictureHarry').click(function(){
  $('#pictureWill').css("visibility","hidden")
  $('#pictureBenji').css("visibility","hidden")
  $('#pictureMarc').css("visibility","hidden")
   $('#pictureHarry').css("width",792).css("height",528).fadeTo( "slow", 0.33 )
    $('#infoHarry').css("visibility","visible").css("position","relative").css("text-align","center")
     
});
   $('#pictureBenji').click(function(){
  $('#pictureHarry').css("visibility","hidden")
  $('#pictureWill').css("visibility","hidden")
  $('#pictureMarc').css("visibility","hidden")
   $('#pictureBenji').css("width",792).css("height",528).fadeTo( "slow", 0.33 )
   $('#infoBenji').css("visibility","visible").css("position","relative").css("text-align","center")
});
   $('#pictureMarc').click(function(){
  $('#pictureWill').css("visibility","hidden")
  $('#pictureBenji').css("visibility","hidden")
  $('#pictureHarry').css("visibility","hidden")
  $('#pictureMarc').css("width",792).css("height",528).fadeTo( "slow", 0.33 )
  $('#infoMarc').css("visibility","visible").css("position","relative").css("text-align","center")
});  
});
