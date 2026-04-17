const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');

// TAMBAHAN FILTER
const inputHuruf = document.getElementById('inputHuruf');
const btnFilterHuruf = document.getElementById('btnFilterHuruf');
const btnReset = document.getElementById('btnReset');

let dataGlobal = [];

// API endpoint
const API_URL = 'https://jsonplaceholder.typicode.com/users';

btnLoad.addEventListener('click', function () {

    loading.classList.remove('d-none');
    container.innerHTML = '';

    fetch(API_URL)
        .then(function (response) {

            if (!response.ok) {
                throw new Error('Gagal mengambil data');
            }

            return response.json();
        })
        .then(function (dataKaryawan) {

            console.log(dataKaryawan);

            // SIMPAN DATA GLOBAL
            dataGlobal = dataKaryawan;

            renderData(dataGlobal);
        })
        .catch(function (error) {

            container.innerHTML = `
                <div class="alert alert-danger">
                    Error: ${error.message}
                </div>
            `;
        })
        .finally(function () {

            loading.classList.add('d-none');
        });

});

// =======================
// RENDER DATA
// =======================
function renderData(data) {

    data.forEach(function (karyawan) {

        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';

        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${karyawan.name}</h5>
                    <p class="card-text text-muted">Email: ${karyawan.email}</p>
                    <p class="card-text">Perusahaan: ${karyawan.company.name}</p>
                    <p class="card-text">
                        <small>Kota: ${karyawan.address.city}</small>
                    </p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Detail Profil</a>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
}

// =======================
// FILTER BERDASARKAN INPUT
// =======================
btnFilterHuruf.addEventListener('click', function () {

    const huruf = inputHuruf.value.toLowerCase();

    if (huruf === "") {
        alert("Masukkan huruf terlebih dahulu!");
        return;
    }

    const hasil = dataGlobal.filter(function (karyawan) {
        return karyawan.address.city.toLowerCase().includes(huruf);
    });

    container.innerHTML = '';
    renderData(hasil);
});

// =======================
// RESET DATA
// =======================
btnReset.addEventListener('click', function () {
    container.innerHTML = '';
    renderData(dataGlobal);
});

// =======================
// ASYNC AWAIT
// =======================
async function cariKaryawan(id) {
    try {
        console.log(`Mencari data ID: ${id}...`);

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!response.ok) {
            throw new Error('Data tidak ditemukan');
        }

        const data = await response.json();

        console.log("Ditemukan:", data);
        alert(`Ditemukan: ${data.name} - bekerja di ${data.company.name}`);

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

// =======================
// LATIHAN 1 (POST DATA)
// =======================
const btnTambah = document.getElementById('btnTambah');

btnTambah.addEventListener('click', function () {

    const dataDummy = {
        name: "Budi Santoso",
        username: "budi.s",
        email: "budi.santoso@perusahaan.com",
        phone: "081234567890",
        website: "www.perusahaan.com",
        company: {
            name: "PT Maju Jaya Abadi"
        },
        address: {
            city: "Surabaya"
        }
    };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataDummy)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("Data berhasil dikirim:", data);
            alert("Data karyawan berhasil dikirim!");
        })
        .catch(function (error) {
            console.error(error);
            alert("Gagal menambahkan data");
        });

});