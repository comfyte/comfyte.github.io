window.onload(alert('Disclaimer: This site (including the blog) is under construction'));

function nowSTART(){
  var ima = new Date();
  var jam = ima.getHours();
  var menit = ima.getMinutes();
  var detik = ima.getSeconds();
  var hari = ima.getDay();
  var tanggal = ima.getDate();
  var bulan = ima.getMonth();
  var tahun = ima.getFullYear();
  var daftarBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  var daftarHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  jam = timeCHECK(jam);
  menit = timeCHECK(menit);
  detik = timeCHECK(detik);
  hari = daftarHari[hari];
  bulan = daftarBulan[bulan];
  document.getElementById('clockTick').innerHTML = jam + "." + menit + "." + detik;
  document.getElementById('todayDate').innerHTML = hari + ", " + tanggal + " " + bulan + " " + tahun;
  setTimeout(nowSTART, 500);
}

function timeCHECK(i){
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
