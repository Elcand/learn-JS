function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs1 = buatObjectMahasiswa("mikhael", "220308", "mikhael@gmail.com", "IT");
var mhs2 = buatObjectMahasiswa(
  "candra",
  "032208",
  "cand@gmail.com",
  "Keuangan"
);

// constractor
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs3 = new Mahasiswa("ikel", "56789876", "ikel123@gmail.com", "Animasi");
