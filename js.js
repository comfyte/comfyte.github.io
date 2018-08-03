var medq = window.matchMedia("(max-width: 600px)");

function hideYokoso(){
  $('#pleasewait').animate({
    opacity: 'hide',
    fontSize: '+=0.5em'
  }, 250);
  setTimeout(showWrapper, 250); //0ms delay
}

function showWrapper(){
  $('.wrapper').animate({opacity: 'show'}, 500);
  if (medq.matches){
    showBG();
  }
  else{
    setTimeout(showShadow, 1000); //500ms delay
  }
}

function showShadow(){
  $('.container-box').css('box-shadow', '0px 0px 100px rgba(0, 0, 0, 0.25)');
  setTimeout(showBG, 1000); //0ms delay
}

function showBG(){
  $('.bg-img').css('opacity', '1');
}

$(document).ready(function(){
  $('.ava-img').prop('title', avatarCredit);
  $('.bg-img').prop('title', backgroundCredit);
  // alert('Disclaimer: This site is under construction');
})

$(window).on('load', function(){
  $('#pleasewait').css('opacity', '1');
  setTimeout(hideYokoso, 500);
  // if (window.matchMedia("(max-width: 600px)").matches){
  //   $('.ava-img').animate({marginLeft: '0px'}, {'queue': false});
  // }
})
