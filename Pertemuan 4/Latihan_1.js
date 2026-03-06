// 1. Inisialisasi data awal
let gajiPokok = 5000000; 
let jamLembur = 7; 

// 2. Menghitung tarif lembur per jam
// Ketentuan: 1.5 × gaji dasar dibagi 173 jam kerja per bulan
let upahLemburPerJam = (1.5 * gajiPokok) / 173;

// 3. Menghitung total pendapatan dari lembur
let totalUpahLembur = upahLemburPerJam * jamLembur;

// 4. Menghitung keseluruhan gaji yang diterima
let totalGaji = gajiPokok + totalUpahLembur;

// 5. Menampilkan hasil ke console
console.log("Gaji Pokok: Rp " + gajiPokok);
console.log("Upah Lembur per Jam: Rp " + upahLemburPerJam.toFixed(2));
console.log("Total Upah Lembur: Rp " + totalUpahLembur.toFixed(2));
console.log("Total Gaji: Rp " + totalGaji.toFixed(2));