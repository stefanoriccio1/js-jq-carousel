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
};

function clickPrev(){
  alert('prima')
};
