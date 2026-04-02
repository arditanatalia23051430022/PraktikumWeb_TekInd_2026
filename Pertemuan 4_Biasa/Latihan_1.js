// =================================
// LATIHAN 1
// Perhitungan Gaji Lembur
// =================================

console.log("=== PERHITUNGAN GAJI KARYAWAN ===");

// Variabel
let gajiPokok = 5000000; // gaji pokok per bulan
let jamLembur = 10; // jumlah jam lembur

// Menghitung upah per jam
let upahPerJam = gajiPokok / 173;

// Menghitung upah lembur
let upahLembur = 1.5 * upahPerJam * jamLembur;

// Menghitung total gaji
let totalGaji = gajiPokok + upahLembur;

// Menampilkan hasil di console
console.log("Gaji Pokok: Rp " + gajiPokok);
console.log("Jam Lembur: " + jamLembur + " jam");

console.log("Upah per Jam: Rp " + upahPerJam.toFixed(2));

console.log("Upah Lembur: Rp " + upahLembur.toFixed(2));

console.log("Total Gaji yang diterima: Rp " + totalGaji.toFixed(2));