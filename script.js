// var arr = ["stroberry", "mangga", "apel", "kates", "gedang"];

// push -> menambahakan array
// arr.push("kelapa", "melon");

// pop -> menghilangkan array terakhir
// arr.pop();
// arr.pop();

// unshift ->menambahkan elemen diawal array & shift -> menghilangkan elemen awal
// arr.unshift("ikel");
// arr.shift();

// splice -> (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2)
// arr.splice(2, 0, "edi", "piki");

// slice(awal, akhir)
// var arr2 = arr.slice(1, 4);

// console.log(arr.join(" . "));
// console.log(arr2.join(" --- "));

var angka = [1, 2, 4, 3, 5, 6, 8, 9, 7, 10];

// foreach
// angka.forEach(function (e) {
//   console.log(e);
// });

// map
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });

// console.log(angka2);


// sort -> mengurutkan
console.log(angka.join(" - "));
angka.sort(function (a, b) {
  return a - b;
});
console.log(angka.join(" - "));
