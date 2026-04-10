const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerInsiden');
const loading = document.getElementById('loading');

// API laporan insiden
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

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
        .then(function (dataInsiden) {

            console.log(dataInsiden);

            // =========================
            // AMBIL 10 DATA TERBARU
            // =========================
            const dataTerbaru = dataInsiden.slice(0, 10);

            renderData(dataTerbaru);
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

// =========================
// RENDER DATA
// =========================
function renderData(data) {

    data.forEach(function (insiden) {

        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';

        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body d-flex flex-column">
                    
                    <!-- JUDUL -->
                    <h5 class="card-title text-primary">${insiden.title}</h5>

                    <!-- DESKRIPSI -->
                    <p class="card-text">${insiden.body}</p>

                    <!-- SPACER -->
                    <div class="mt-auto">
                        <button class="btn btn-outline-primary btn-sm w-100"
                            onclick="tindakLanjut(${insiden.id})">
                            Tindak Lanjut
                        </button>
                    </div>

                </div>
            </div>
        `;

        container.appendChild(col);
    });
}

// =========================
// TINDAK LANJUT
// =========================
function tindakLanjut(id) {
    alert(`Tiket ID ${id} sedang diproses oleh Tim Maintenance`);
}