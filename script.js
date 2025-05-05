var arr = ["stroberry", "mangga", "apel", "kates", "gedang"];

// push -> menambahakan array
// arr.push("kelapa", "melon");

// pop -> menghilangkan array terakhir
// arr.pop();
// arr.pop();

// unshift ->menambahkan elemen diawal array & shift -> menghilangkan elemen awal
// arr.unshift("ikel");
// arr.shift();

// splice -> (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2)
arr.splice(2, 0, "edi", "piki");

console.log(arr.join(" . "));
