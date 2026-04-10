const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');

// API endpoint
const API_URL = 'https://jsonplaceholder.typicode.com/users';

btnLoad.addEventListener('click', function () {

    // tampilkan loading
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
            renderData(dataKaryawan);
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

// fungsi render data ke HTML
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

// contoh pemanggilan (bisa di console browser)
// cariKaryawan(2);