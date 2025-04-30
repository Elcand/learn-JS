var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
for (noAngkot >= angkotBeroperasi; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 7) {
    console.log("Angkot No. " + noAngkot + " sedang beroperasi");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
  }
}
