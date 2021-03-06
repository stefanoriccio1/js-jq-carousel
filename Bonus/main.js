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

// funzioni riutilizzabili
function clickNext(){
  var imgActive = $('.active');
  var nextImg = imgActive.next();

  if(imgActive.hasClass('last') == true){
    imgActive.removeClass('active');
    $('img.first').addClass('active');
  }

  else{
    imgActive.removeClass('active');
    nextImg.addClass('active');
  }
};

function clickPrev(){
  var imgActive = $('.active');
  var prevImg = imgActive.prev();

  if (imgActive.hasClass('first') == true){
    imgActive.removeClass('active');
    $('img.last').addClass('active');
  }
  else {
    imgActive.removeClass('active');
    prevImg.addClass('active');
  }
};

// keydown
$(document).keydown(
  function(){

  if (event.keyCode == 39){
    clickNext()
  }
  else if (event.keyCode == 37){
    clickPrev()
  }
  }
)
