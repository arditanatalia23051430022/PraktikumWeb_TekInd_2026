// Array daftar kode cacat
let daftarCacat = ["C-001", "C-005", "C-012", "C-001", "C-020"];

// menampilkan daftar cacat di halaman
document.getElementById("daftarCacat").textContent = daftarCacat.join(" , ");

// function menghitung jumlah C-001
function hitungCacat(){

    let jumlah = 0;

    // loop mengecek isi array
    for(let i = 0; i < daftarCacat.length; i++){

        if(daftarCacat[i] === "C-001"){
            jumlah++;
        }

    }

    // tampilkan hasil di halaman
    document.getElementById("hasilHitung").textContent =
    "Jumlah C-001 ditemukan sebanyak " + jumlah + " kali";

    // tampilkan juga di console
    console.log("Daftar cacat:", daftarCacat);
    console.log("Jumlah C-001:", jumlah);

}