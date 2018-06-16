// INPUT CREDITS INFO HERE:
var avaCredit = "<name>" // Profile picture
// var bgArray = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13' ];



// Do not look down
// function getRandomInt (min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function showWrapper(){
  $('.wrapper').animate({opacity: 'show'}, 500);
  setTimeout(showShadow, 1000);
}

function showShadow(){
  $('.container-box').css('box-shadow', '0px 0px 100px rgba(0, 0, 0, 0.25)');
  setTimeout(showBG, 100);
}

function showBG(){
  $('.bg-img').css('opacity', '1');
}

$(document).ready(function(){
  // var bgIndex = getRandomInt(0, bgArray.length-1);
  // $('.bg-img').css('background-image', 'url(res/bg/'+bgArray[bgIndex]+')');
  $('.ava-img').prop('title', 'Illustration by '+avaCredit+' on pixiv');
  // Temporary alert message
  alert('Disclaimer: This site is under construction');
})

$(window).on('load', function(){

  $('#pleasewait').animate({
    opacity: 'hide',
    fontSize: '+=0.5em'
  }, 250);
  setTimeout(showWrapper, 500);
  // $('.container-box').css('align-items', 'flex-end');

  // $('.ava-img').animate({
  //   padding: 'hide',
  //   width: 'show',
  //   height: 'show'
  // })

  // $('.ava-img').animate({
  //   width: '100px',
  //   height: '100px'
  // });

  // if (window.matchMedia("(max-width: 600px)").matches){
  //   $('.ava-img').animate({marginLeft: '0px'}, {'queue': false});
  // }

  // $('.ava-img > img').animate({
  //   marginLeft: '0px',
  //   marginTop: '0px'
  //
  // });

  // $('.ava-img > img').css('transform', 'initial');
  // $('.divider').css('width', '100px');

  // alert('Complete loaded!');
})
