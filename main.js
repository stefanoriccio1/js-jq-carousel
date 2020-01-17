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
  alert('dopo')
};

function clickPrev(){
  alert('prima')
};
