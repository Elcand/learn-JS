function jumlahVolumeDuaKubus(a, b) {
  var VA;
  var VB;
  var total;

  VA = a * a * a;
  VB = b * b * b;

  total = VA + VB;

  return total;
}
alert(jumlahVolumeDuaKubus(8, 3));
alert(jumlahVolumeDuaKubus(10, 15));
