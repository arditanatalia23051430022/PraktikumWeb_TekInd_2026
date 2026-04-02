// ========================
// 1. SELEKSI ELEMEN
// ========================
const formProduksi = document.getElementById('formProduksi');
const tabelBody = document.getElementById('tabelBody');
const btnHapusSemua = document.getElementById('btnHapusSemua');
const cariOperator = document.getElementById('cariOperator');

const STORAGE_KEY = 'DATA_PRODUKSI_INDUSTRI';


// ========================
// 2. LOAD DATA SAAT HALAMAN DIBUKA
// ========================
document.addEventListener('DOMContentLoaded', loadDataFromStorage);

// EVENT FILTER (AMAN)
if (cariOperator) {
    cariOperator.addEventListener('keyup', function () {
        loadDataFromStorage();
    });
}


// ========================
// 3. SUBMIT FORM
// ========================
formProduksi.addEventListener('submit', function (event) {
    event.preventDefault();

    const tanggal = document.getElementById('tanggal').value;
    const operator = document.getElementById('operator').value.trim();
    const shift = document.getElementById('shift').value;
    const jumlah = document.getElementById('jumlah').value;

    // VALIDASI
    if (!tanggal || !operator || !shift || jumlah <= 0) {
        alert("Semua data harus diisi dengan benar!");
        return;
    }

    // OBJECT DATA
    const dataBaru = {
        id: Date.now(),
        tanggal: tanggal,
        operator: operator,
        shift: shift,
        jumlah: parseInt(jumlah)
    };

    // SIMPAN
    saveData(dataBaru);

    // RESET FORM
    formProduksi.reset();

    // REFRESH TABEL
    loadDataFromStorage();
});


// ========================
// 4. SIMPAN DATA
// ========================
function saveData(data) {
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    dataLama.push(data);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}


// ========================
// 5. LOAD & TAMPILKAN DATA (DENGAN FILTER)
// ========================
function loadDataFromStorage() {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    const keyword = cariOperator ? cariOperator.value.toLowerCase() : '';

    // FILTER DATA
    let dataFilter = data.filter(item =>
        item.operator.toLowerCase().includes(keyword)
    );

    tabelBody.innerHTML = '';

    if (dataFilter.length === 0) {
        tabelBody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted">
                    Data tidak ditemukan
                </td>
            </tr>
        `;
        return;
    }

    dataFilter.forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.tanggal}</td>
            <td>${item.operator}</td>
            <td>${item.shift}</td>
            <td>${item.jumlah}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="hapusData(${item.id})">
                    Hapus
                </button>
            </td>
        `;

        tabelBody.appendChild(row);
    });
}


// ========================
// 6. HAPUS DATA PER ITEM
// ========================
window.hapusData = function (id) {
    if (confirm('Yakin ingin menghapus data ini?')) {

        let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

        let dataBaru = data.filter(item => item.id !== id);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));

        loadDataFromStorage();
    }
};


// ========================
// 7. HAPUS SEMUA DATA
// ========================
btnHapusSemua.addEventListener('click', function () {
    if (confirm('PERINGATAN: Semua data akan dihapus!')) {
        localStorage.removeItem(STORAGE_KEY);
        loadDataFromStorage();
    }
});