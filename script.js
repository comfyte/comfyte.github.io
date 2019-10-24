function age() { //何歳
  var today = new Date();
  var DoB = new Date("2002-04-12");
  var umur = today.getFullYear() - DoB.getFullYear();
  var m = today.getMonth() - DoB.getMonth();
  if ( m < 0 || ( m === 0 && today.getDate() < DoB.getDate() ) ) { umur = umur - 1 }
  return umur;
}

var subtitle = [
  "Tech enthusiast",
  "Indonesian",
  age(),
  "Information Engineering",
  "La💞",
  // "comfyte" // initial value
]

const LastUsedMode = localStorage.getItem('Nmode') ? localStorage.getItem('Nmode') : null;

if (LastUsedMode) { // if exists, change to dark mode
  document.documentElement.setAttribute('data-theme', LastUsedMode);
  $("meta[name=theme-color]").attr('content', '#222222');
}

function toggleNmode() {
  if (document.documentElement.getAttribute('data-theme') == 'dark') {
    document.documentElement.removeAttribute('data-theme'); // change theme to light
    localStorage.removeItem('Nmode'); // remove darktheme entry from local storage
    $(".togglebutton").removeClass("fa-sun");
    $(".togglebutton").addClass("fa-moon"); // change toggle button icon to moon
    $(".togglebutton").attr("title","Dark mode");
    $("meta[name=theme-color]").attr('content', '#fafafa');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'dark');  // change theme to dark
    localStorage.setItem('Nmode', 'dark');  // add darktheme entry to local storage
    $(".togglebutton").removeClass("fa-moon");
    $(".togglebutton").addClass("fa-sun");  // change toggle button icon to sun
    $(".togglebutton").attr("title","Light mode");
    $("meta[name=theme-color]").attr('content', '#222222');
  }
}

var i = 0;

function part0() { // 1s delay before changing subtitle
  setTimeout(part1, 1000);
}

function part1() { // turn down opacity before changing
  $("h2").css("opacity", 0);
  setTimeout(part2, 500); // duration according to css transition: opacity
}

function part2() { // change!
  $("h2").text(subtitle[i]);
  if (i == subtitle.length-1) {i = 0;}
  else {i++;}
  setTimeout(part3, 250); // slight delay before displaying again
}

function part3() { // display!
  $("h2").css("opacity", 1);
  setTimeout(part0, 500); // duration according to css transition
}

var origtitle = document.title;

function init1() {
  document.title = "Please wait...";
  $("h2").text(subtitle[subtitle.length-1]);
  if (LastUsedMode) {
    $(".togglebutton").removeClass("fa-moon");
    $(".togglebutton").addClass("fa-sun");
    $(".togglebutton").attr("title","Light mode");
  }
}

function init2() {
  $("body").css("opacity", "1");
  $("img").css("transform", "unset");
  setTimeout(part0, 500); // wait until opacity restored
  document.title = origtitle;
  setTimeout(function() {
    if (document.title != origtitle) {
      document.title = origtitle;
    };
  }, 2000);
}

$(document).ready(init1);
$(window).on('load', init2);
