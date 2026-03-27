const daya = document.getElementById('daya');
const jam = document.getElementById('jam');
const kwh = document.getElementById('kwh');
const biaya = document.getElementById('biaya');
const status = document.getElementById('status');
const progressBar = document.getElementById('progressBar');
const log = document.getElementById('log');

function hitung() {
    let d = parseFloat(daya.value);
    let j = parseFloat(jam.value);

    if (!d || !j) {
        status.innerText = "Menunggu input...";
        progressBar.style.width = "0%";
        return;
    }

    let totalKwh = (d * j) / 1000;
    let totalBiaya = totalKwh * 1500;

    // tampilkan hasil
    kwh.innerText = "Total kWh: " + totalKwh.toFixed(2);
    biaya.innerText = "Estimasi Biaya: Rp " + totalBiaya.toLocaleString();

    // update status
    status.innerText = "Perhitungan berhasil";

    // progress bar
    progressBar.style.width = "100%";

    // log
    let item = document.createElement("div");
    item.className = "log-item";
    item.innerText = `Daya: ${d}W | Jam: ${j} jam → ${totalKwh.toFixed(2)} kWh`;

    log.prepend(item);
}

// realtime
daya.addEventListener('input', hitung);
jam.addEventListener('input', hitung);