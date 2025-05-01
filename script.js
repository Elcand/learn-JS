// menangkap pilihan player
var P1 = prompt("Pilih: gajah, manusia, semut!");

// menangkap pilihan bot
//  membangkitkan bilangan random
var P2 = Math.random();
if (P2 < 0.34) {
  P2 = "gajah";
} else if (P2 >= 0.34 && P2 <= 0.67) {
  P2 = "orang";
} else {
  P2 = "semut";
}

//tentukan rules
var hasil = "";
if (P1 == P2) {
  hasil = "SERI";
} else if (P1 == "gajah") {
  // if (P2 == "gajah") {
  //   hasil = "MENANG";
  // } else {
  //   hasil = "KALAH";
  // }
  hasil = P1 == "orang" ? "MENANG" : "KALAH";
} else if (P1 == "orang") {
  hasil = P1 == "gajah" ? "KALAH" : "MENANG";
} else if (P1 == "semut") {
  hasil = P1 == "orang" ? "KALAH" : "MENANG";
}else{
  alert='Yang anda masukan salah'
}

// tampilkan hasil
alert('Kamu memilih : '+P1+' dan P2 memilih : '+P2+'\nMaka hasailnya : Kamu ' + hasil)