const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnReset = document.getElementById('btnReset');
const btnMaintenance = document.getElementById('btnMaintenance');

const statusIndicator = document.getElementById('statusIndicator');
const suhuMesin = document.getElementById('suhuMesin');
const teksStatus = statusIndicator.querySelector('strong');
const panel = document.querySelector('.panel');

let suhu = 25;
let intervalId = null;

btnStart.addEventListener('click', function () {

    statusIndicator.style.background = "#27ae60"; // hijau
    statusIndicator.style.color = "white";
    teksStatus.innerText = "RUNNING";

    intervalId = setInterval(function () {
        suhu++;
        suhuMesin.innerText = suhu + " °C";

        if (suhu > 80) {
            statusIndicator.style.background = "#e74c3c"; // merah
            teksStatus.innerText = "OVERHEAT WARNING";
            suhuMesin.style.color = "red";
        }
    }, 1000);

    btnStart.disabled = true;
    btnStop.disabled = false;
});

btnStop.addEventListener('click', function () {
    clearInterval(intervalId);

    statusIndicator.style.background = "#e74c3c"; // 🔴 MERAH
    statusIndicator.style.color = "white";
    teksStatus.innerText = "STOPPED";

    btnStart.disabled = false;
    btnStop.disabled = true;
});

btnReset.addEventListener('click', function () {
    clearInterval(intervalId);

    suhu = 25;
    suhuMesin.innerText = suhu + " °C";
    suhuMesin.style.color = "black";

    statusIndicator.style.background = "#f1c40f"; // 🟡 KUNING
    statusIndicator.style.color = "black";
    teksStatus.innerText = "RESET";

    panel.classList.remove('bg-light');

    btnStart.disabled = false;
    btnStop.disabled = true;
});


// =======================
// VALIDASI RPM
// =======================
const inputRPM = document.getElementById('inputRPM');
const pesanError = document.getElementById('pesanError');

inputRPM.addEventListener('input', function () {
    let val = parseInt(this.value);

    if (val > 2000) {
        pesanError.style.display = "block";
    } else {
        pesanError.style.display = "none";
    }
});