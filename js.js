var medq = window.matchMedia("(max-width: 600px)");

function hideYokoso(){
  // console.log("hideYokoso1");
  $('#pleasewait').animate({
    opacity: 'hide',
    fontSize: '+=0.5em'
  }, 250);
  setTimeout(showWrapper, 250); //0ms delay
  if (medq.matches){
    showBG();
  }
}

function showWrapper(){
  // console.log("ShowWrapper2");
  $('.wrapper').animate({opacity: 'show'}, 500);
  setTimeout(showShadow, 1000); //500ms delay
}

function showShadow(){
  // console.log("showShadow3");
  $('.container-box').css('box-shadow', '0px 0px 100px rgba(0, 0, 0, 0.25)');
  if (medq.matches){}
  else{
    setTimeout(showBG, 1000); //0ms delay
  }
}

function showBG(){
  // console.log("showBackground4");
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
