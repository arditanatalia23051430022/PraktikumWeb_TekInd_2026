const btnLoad      = document.getElementById('btnLoad');
const btnTambah    = document.getElementById('btnTambah');
const btnFilter    = document.getElementById('btnFilter');
const btnTampilkan = document.getElementById('btnTampilkan');
const inputHuruf   = document.getElementById('inputHuruf');
const container    = document.getElementById('containerInsiden');

let semuaData = [];

// ─── 1. MUAT DATA DARI API (GET) ───
btnLoad.addEventListener('click', function () {
    container.innerHTML = '<div class="text-center text-primary py-4">Memuat data...</div>';

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            if (!response.ok) throw new Error('Gagal memuat data dari API');
            return response.json();
        })
        .then(function (data) {
            semuaData = data;
            renderData(semuaData);
        })
        .catch(function (error) {
            container.innerHTML =
                '<div class="col-12 text-center text-danger py-4">❌ Error: ' + error.message + '</div>';
        });
});

// ─── 2. TAMBAH KARYAWAN BARU (POST) ───
btnTambah.addEventListener('click', function () {
    const karyawanBaru = {
        name    : 'Ardita Natalia',
        username: 'ardita.natalia',
        email   : 'ardita@company.com',
        address : {
            street : 'Jl. Sudirman No. 10',
            suite  : 'Apt. 3B',
            city   : 'Surabaya',
            zipcode: '60271'
        },
        phone  : '081234567890',
        website: 'ardita.dev',
        company: {
            name       : 'PT. Produksi Maju',
            catchPhrase: 'Inovasi Tanpa Batas',
            bs         : 'synergize scalable supply-chains'
        }
    };

    console.log('📤 Mengirim data karyawan baru ke API...', karyawanBaru);

    fetch('https://jsonplaceholder.typicode.com/users', {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body   : JSON.stringify(karyawanBaru)
    })
        .then(function (response) {
            if (!response.ok) throw new Error('Gagal menambahkan karyawan');
            return response.json();
        })
        .then(function (data) {
            console.log('✅ Respons dari API (POST berhasil):', data);
            alert(
                '✅ Karyawan baru berhasil ditambahkan!\n\n' +
                'ID   : ' + data.id + '\n' +
                'Nama : ' + data.name + '\n' +
                'Email: ' + data.email + '\n\n' +
                '(Cek Console untuk detail lengkap)'
            );
        })
        .catch(function (error) {
            console.error('❌ Error POST:', error);
            alert('❌ Gagal menambahkan karyawan: ' + error.message);
        });
});

// ─── 3. FILTER BERDASARKAN HURUF ───
btnFilter.addEventListener('click', function () {
    const huruf = inputHuruf.value.trim().toLowerCase();

    if (!huruf) {
        alert('Masukkan huruf terlebih dahulu!');
        return;
    }
    if (semuaData.length === 0) {
        alert('Muat data dari API terlebih dahulu!');
        return;
    }

    const dataFiltered = semuaData.filter(function (karyawan) {
        return karyawan.address.city.toLowerCase().includes(huruf);
    });

    if (dataFiltered.length === 0) {
        container.innerHTML =
            '<div class="col-12 text-center text-warning py-4">' +
            '⚠️ Tidak ada karyawan dengan kota yang mengandung huruf "<strong>' + huruf + '</strong>"' +
            '</div>';
    } else {
        renderData(dataFiltered);
    }
});

// ─── 4. TAMPILKAN SEMUA (reset filter) ───
btnTampilkan.addEventListener('click', function () {
    if (semuaData.length === 0) {
        alert('Muat data dari API terlebih dahulu!');
        return;
    }
    inputHuruf.value = '';
    renderData(semuaData);
});

// ─── RENDER KARTU ───
function renderData(data) {
    container.innerHTML = '';

    data.forEach(function (karyawan) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        col.innerHTML =
            '<div class="card h-100 shadow-sm">' +
                '<div class="card-body d-flex flex-column">' +
                    '<span class="badge-tiket">ID #' + String(karyawan.id).padStart(3, '0') + '</span>' +
                    '<h5 class="card-title">' + karyawan.name + '</h5>' +
                    '<p class="card-text flex-grow-1">' +
                        '📧 ' + karyawan.email + '<br>' +
                        '📞 ' + karyawan.phone + '<br>' +
                        '🏙️ ' + karyawan.address.city + '<br>' +
                        '🏢 ' + karyawan.company.name +
                    '</p>' +
                    '<button class="btn-tindak" onclick="tindakLanjut(' + karyawan.id + ', \'' + karyawan.name + '\')">Tindak Lanjut</button>' +
                '</div>' +
            '</div>';

        container.appendChild(col);
    });
}

function tindakLanjut(id, nama) {
    alert('Karyawan #' + String(id).padStart(3, '0') + ' — ' + nama + '\nsedang diproses oleh Tim Maintenance');
}