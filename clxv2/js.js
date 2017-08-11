function timeSTART(){
  var ima = new Date();
  var jam = ima.getHours();
  var menit = ima.getMinutes();
  var detik = ima.getSeconds();
  var hari = ima.getDay();
  jam = timeCHECK(jam);
  menit = timeCHECK(menit);
  detik = timeCHECK(detik);
  document.getElementById('realtimeclock').innerHTML = ima + " " + jam + "." + menit + "." + detik;
  setTimeout(timeSTART, 500);
}

function timeCHECK(i){
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function langID(){
  document.getElementById('instr').innerHTML = "Klik salah satu tombol di bawah ini untuk menuju ke laman yang diinginkan.";
  setTimeout(langEN, 1500);
}

function langEN(){
  document.getElementById('instr').innerHTML = "Click or tap one of these buttons to go to desired page.";
  setTimeout(langJP, 1500);
}

function langJP(){
  document.getElementById('instr').innerHTML = "これらのボタンを一つクリックすると、目的のページを開きます。";
  setTimeout(langID, 1500);
}
