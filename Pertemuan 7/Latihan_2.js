// ========================
// 1. SELEKSI ELEMEN
// ========================
const formProduksi = document.getElementById('formProduksi');
const tabelBody = document.getElementById('tabelBody');
const btnHapusSemua = document.getElementById('btnHapusSemua');
const cariOperator = document.getElementById('cariOperator');
const btnSort = document.getElementById('btnSort');

const STORAGE_KEY = 'DATA_PRODUKSI_INDUSTRI';

let sortMode = 'desc'; // default: terbesar → terkecil


// ========================
// 2. LOAD DATA SAAT HALAMAN DIBUKA
// ========================
document.addEventListener('DOMContentLoaded', loadDataFromStorage);

// EVENT FILTER
if (cariOperator) {
    cariOperator.addEventListener('keyup', function () {
        loadDataFromStorage();
    });
}

// EVENT SORT (INTERAKTIF)
if (btnSort) {
    btnSort.addEventListener('click', function () {

        // toggle mode
        if (sortMode === 'desc') {
            sortMode = 'asc';
            btnSort.textContent = 'Sort: Terkecil → Terbesar';
        } else {
            sortMode = 'desc';
            btnSort.textContent = 'Sort: Terbesar → Terkecil';
        }

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

    if (!tanggal || !operator || !shift || jumlah <= 0) {
        alert("Semua data harus diisi dengan benar!");
        return;
    }

    const dataBaru = {
        id: Date.now(),
        tanggal: tanggal,
        operator: operator,
        shift: shift,
        jumlah: parseInt(jumlah)
    };

    saveData(dataBaru);
    formProduksi.reset();
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
// 5. LOAD + FILTER + SORT
// ========================
function loadDataFromStorage() {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    const keyword = cariOperator ? cariOperator.value.toLowerCase() : '';

    // FILTER
    let dataFilter = data.filter(item =>
        item.operator.toLowerCase().includes(keyword)
    );

    // SORT DINAMIS
    if (sortMode === 'desc') {
        dataFilter.sort((a, b) => b.jumlah - a.jumlah); // terbesar → kecil
    } else {
        dataFilter.sort((a, b) => a.jumlah - b.jumlah); // kecil → terbesar
    }

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
// 6. HAPUS DATA
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
// 7. HAPUS SEMUA
// ========================
btnHapusSemua.addEventListener('click', function () {
    if (confirm('PERINGATAN: Semua data akan dihapus!')) {
        localStorage.removeItem(STORAGE_KEY);
        loadDataFromStorage();
    }
});