var subtitle = [
  "Indonesian",
  "CGDCT fan",
  "16",
  "Латифа <3",
  "High school student",
  "comfyte",
  "Tech purist" // initial value on last
]

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

function loaded() {
  $(".throbber").css("display", "none");
  init();
}

function init(){
  $(".container").css("opacity", "1");
  $("img, .naviwrap, .social, .credit").css("transform", "unset");
  setTimeout(part0, 1000); // wait until opacity restored
}

$(window).on('load', function(){
  setTimeout(loaded, 500);
})
