// ========================================
// Praktikum JavaScript Dasar - Modul 4
// Variabel, Tipe Data, Operator, Control Flow
// ========================================


// 1. Variabel & Tipe Data
let namaMesin = "CNC-Mazak-01"; // String
let targetHarian = 500; // Number

console.log("Mesin: " + namaMesin);
console.log("Target Produksi Harian: " + targetHarian);


// 2. Operator Aritmatika
let produksiPagi = 200;
let produksiSiang = 150;

let totalProduksi = produksiPagi + produksiSiang;
console.log("Total Produksi Saat Ini: " + totalProduksi);

// Menghitung sisa target produksi
let kekurangan = targetHarian - totalProduksi;
console.log("Kekurangan Target: " + kekurangan);


// ========================================
// 3. Control Flow - Cek Status Maintenance
// ========================================

// Simulasi data sensor
let jamOperasional = 1250; 
let batasMaksimal = 1200;

console.log("--- Cek Status Maintenance ---");

if (jamOperasional >= batasMaksimal) {
    console.log("PERINGATAN: Mesin mencapai batas maksimal!");
    console.log("Status: MAINTENANCE WAJIB (Stop Produksi)");
} 
else if (jamOperasional > 1000) {
    console.log("Status: SIAP HATI-HATI (Segera jadwalkan maintenance)");
} 
else {
    console.log("Status: BERJALAN NORMAL");
}


// ========================================
// 4. Perhitungan Availability (OEE Sederhana)
// ========================================

let jamKerjaPlanned = 8; 
let jamKerjaAktual = 6.5;

// Perhitungan availability
let availability = (jamKerjaAktual / jamKerjaPlanned) * 100;
availability = availability.toFixed(2);

console.log("Planned Time: " + jamKerjaPlanned + " Jam");
console.log("Actual Time: " + jamKerjaAktual + " Jam");
console.log("Availability: " + availability + "%");

// Penilaian availability
if (availability >= 90) {
    console.log("Kategori: WORLD CLASS");
} 
else if (availability >= 80) {
    console.log("Kategori: BAIK (Tetap monitor)");
} 
else {
    console.log("Kategori: BURUK (Perlu investigasi penyebab breakdown)");
}


// ========================================
// 5. Interaksi Pengguna (Prompt & Alert)
// ========================================

let namaOperator = prompt("Masukkan Nama Operator:");
let shiftKerja = prompt("Masukkan Shift (Pagi/Siang/Malam):");

if (shiftKerja === "Malam") {
    alert("Halo " + namaOperator + 
    ", Shift malam memiliki tambahan uang makan sebesar Rp 20.000.");
} 
else {
    alert("Halo " + namaOperator + 
    ", Selamat bekerja. Tetap semangat!");
}