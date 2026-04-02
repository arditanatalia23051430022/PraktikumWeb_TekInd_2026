// =================================
// MINI PROJECT
// Kalkulator Biaya Produksi
// =================================

console.log("=== KALKULATOR BIAYA PRODUKSI ===");

// Input menggunakan pop-up
let biayaBahanBaku = Number(prompt("Masukkan Biaya Bahan Baku:"));
let biayaTenagaKerja = Number(prompt("Masukkan Biaya Tenaga Kerja:"));
let biayaOverhead = Number(prompt("Masukkan Biaya Overhead:"));
let jumlahProduksi = Number(prompt("Masukkan Jumlah Produksi (unit):"));

// Menghitung biaya produksi per unit
let totalPerUnit =
(biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi;

// Menampilkan data
console.log("Biaya Bahan Baku: Rp " + biayaBahanBaku);
console.log("Biaya Tenaga Kerja: Rp " + biayaTenagaKerja);
console.log("Biaya Overhead: Rp " + biayaOverhead);
console.log("Jumlah Produksi: " + jumlahProduksi + " unit");

console.log("Biaya Produksi per Unit: Rp " + totalPerUnit.toFixed(2));

// Logika efisiensi produksi
if (jumlahProduksi < 100) {

console.log("Status: Biaya Tinggi (Ekonomi Skala Kecil)");

} else {

console.log("Status: Biaya Efisien");

}