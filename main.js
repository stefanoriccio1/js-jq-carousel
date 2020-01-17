$(document).ready(function(){

  $('.next').click(
    function(){
      clickNext();
    }
);
  $('.prev').click(
    function(){
      clickPrev();
    }
  );
 }
);

function clickNext(){
  var imgActive = $('.active');
  var nextImg = imgActive.next();

  if(imgActive.hasClass('last') == true){
    $('img.first').addClass('active');
    $('img.last').removeClass('active');
  }

  else{
    imgActive.removeClass('active');
    nextImg.addClass('active');
  }
};

function clickPrev(){
  alert('prima')
};
