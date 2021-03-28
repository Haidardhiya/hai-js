var x =10;
console.log('hello world');
console.log('isi dari variable x adalah ' + x);

// alert('hello world!') untuk menampilkan pop up simple hanya oke
// confirm('hello world') untuk menampilkan pop up dengan pilihan konfirmasi ok dan cancel biasanya saat penghapusan data
// prompt('hellow world') untuk menampilkan pop up dengan meminta input pengguna

// var nama = prompt('Masukkan nama');
// alert(nama);
// confirm("are you sure?");

// var tes = confirm("kamu yakin?");
// alert(tes);
// if ( tes == true ) {
//     alert("Pilihan yang benar!");
// } else {
//     alert('Pilihan yang salah!')
// }

alert("selamat datang");
var lagi = true;

while( lagi == true ) {
    var nama = prompt("masukkan nama:");
    alert("halo " + nama);

    lagi = confirm("coba lagi?");
}

alert("terima kasih");