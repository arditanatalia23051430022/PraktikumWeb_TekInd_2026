// ========================
// EVENT CHECKLIST
// ========================
document.querySelectorAll(".checklist").forEach(cb => {
    cb.addEventListener("change", updateSkor);
});

// EVENT FILTER
document.getElementById("cariAuditor").addEventListener("keyup", tampilkanData);

// EVENT SORT
document.getElementById("sortSkor").addEventListener("change", tampilkanData);

// EVENT HAPUS SEMUA
document.getElementById("btnHapusSemua").addEventListener("click", function () {
    if (confirm("PERINGATAN: Semua data akan dihapus!")) {
        localStorage.removeItem("audit5S");
        tampilkanData();
    }
});


// ========================
// HITUNG SKOR
// ========================
function updateSkor() {
    let checklist = document.querySelectorAll(".checklist");
    let jumlah = 0;

    checklist.forEach(cb => {
        if (cb.checked) jumlah++;
    });

    let skor = (jumlah / 5) * 100;
    document.getElementById("skorLive").innerText = skor + "%";
}


// ========================
// SIMPAN DATA
// ========================
function simpanData() {
    let auditor = document.getElementById("auditor").value;

    if (auditor === "") {
        alert("Nama auditor harus diisi!");
        return;
    }

    let checklist = document.querySelectorAll(".checklist");
    let jumlah = 0;

    checklist.forEach(cb => {
        if (cb.checked) jumlah++;
    });

    let skor = (jumlah / 5) * 100;

    let data = {
        id: Date.now(),
        tanggal: new Date().toLocaleString(),
        auditor: auditor,
        skor: skor
    };

    let riwayat = JSON.parse(localStorage.getItem("audit5S")) || [];
    riwayat.push(data);

    localStorage.setItem("audit5S", JSON.stringify(riwayat));

    tampilkanData();
    resetForm();
}


// ========================
// TAMPILKAN DATA + FILTER + SORT
// ========================
function tampilkanData() {
    let tabel = document.getElementById("tabelData");
    tabel.innerHTML = "";

    let keyword = document.getElementById("cariAuditor").value.toLowerCase();
    let sort = document.getElementById("sortSkor").value;

    let riwayat = JSON.parse(localStorage.getItem("audit5S")) || [];

    let dataFilter = riwayat.filter(item =>
        item.auditor.toLowerCase().includes(keyword)
    );

    // SORT
    if (sort === "desc") {
        dataFilter.sort((a, b) => b.skor - a.skor);
    } else if (sort === "asc") {
        dataFilter.sort((a, b) => a.skor - b.skor);
    }

    if (dataFilter.length === 0) {
        tabel.innerHTML = `
            <tr>
                <td colspan="4" class="text-muted">Data tidak ditemukan</td>
            </tr>
        `;
        return;
    }

    dataFilter.forEach(item => {
        tabel.innerHTML += `
            <tr>
                <td>${item.tanggal}</td>
                <td>${item.auditor}</td>
                <td>${item.skor}%</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="hapusData(${item.id})">
                        Hapus
                    </button>
                </td>
            </tr>
        `;
    });
}


// ========================
// HAPUS DATA
// ========================
function hapusData(id) {
    if (confirm("Yakin ingin menghapus data ini?")) {
        let riwayat = JSON.parse(localStorage.getItem("audit5S")) || [];

        let dataBaru = riwayat.filter(item => item.id !== id);

        localStorage.setItem("audit5S", JSON.stringify(dataBaru));

        tampilkanData();
    }
}


// ========================
// RESET FORM
// ========================
function resetForm() {
    document.getElementById("auditor").value = "";
    document.querySelectorAll(".checklist").forEach(cb => cb.checked = false);
    document.getElementById("skorLive").innerText = "0%";
}


// ========================
// LOAD DATA
// ========================
window.onload = tampilkanData;