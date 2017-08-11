function allscripts(){
  timeSTART();
  langEN();
}

function timeSTART(){
  var ima = new Date();
  var jam = ima.getHours();
  var menit = ima.getMinutes();
  var detik = ima.getSeconds();
  var hari = ima.getDay();
  var bulan = ima.getMonth();
  var tahun = ima.getFullYear();
  jam = timeCHECK(jam);
  menit = timeCHECK(menit);
  detik = timeCHECK(detik);
  document.getElementById('realtimeclock').innerHTML = jam + "." + menit + "." + detik;
  document.getElementById('realtimedate').innerHTML = ima.toDateString();
  setTimeout(timeSTART, 500);
}

function timeCHECK(i){
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function langEN(){
  document.getElementById('instr').innerHTML = "Click one of these buttons to go to desired page.";
  setTimeout(langID, 2000);
}

function langID(){
  document.getElementById('instr').innerHTML = "Silakan klik salah satu tombol untuk menuju laman yang diinginkan.";
  setTimeout(langJP, 2000);
}

function langJP(){
  document.getElementById('instr').innerHTML = "これらのボタンを一つクリックすると、目的のページを開きます。";
  setTimeout(langEN, 2000);
}
