// Array of Objects antrian mesin
let antrianMesin = [
    { idJob: "J01", namaProses: "Drilling", durasi: 30 },
    { idJob: "J02", namaProses: "Welding", durasi: 40 },
    { idJob: "J03", namaProses: "Polishing", durasi: 25 }
];


// menampilkan antrian ke tabel
function tampilkanAntrian(){

    let tabel = document.getElementById("tabelAntrian");
    tabel.innerHTML = "";

    antrianMesin.forEach(job => {

        let baris = `
        <tr>
        <td>${job.idJob}</td>
        <td>${job.namaProses}</td>
        <td>${job.durasi}</td>
        </tr>
        `;

        tabel.innerHTML += baris;

    });

}


// menambah log proses
function tambahLog(teks){

    let log = document.getElementById("logProses");

    let p = document.createElement("p");
    p.className = "log-item";
    p.textContent = teks;

    log.appendChild(p);

}


// function proses antrian
function prosesAntrian(antrian){

    let index = 0;

    function prosesSelanjutnya(){

        if(index >= antrian.length){

            document.getElementById("statusMesin").textContent =
            "Semua proses job telah selesai";

            return;

        }

        let job = antrian[index];

        document.getElementById("statusMesin").textContent =
        `Memproses ${job.idJob} - ${job.namaProses}`;

        let pesan =
        `Memproses Job ${job.idJob} - ${job.namaProses} selama ${job.durasi} menit`;

        console.log(pesan);
        tambahLog(pesan);

        let progress = 0;

        let interval = setInterval(()=>{

            progress += 20;

            document.getElementById("progressBar").style.width =
            progress + "%";

            if(progress >= 100){

                clearInterval(interval);

                index++;

                setTimeout(prosesSelanjutnya,500);

            }

        },300);

    }

    prosesSelanjutnya();

}


// menjalankan simulasi
function jalankanSimulasi(){

    document.getElementById("logProses").innerHTML = "";
    document.getElementById("progressBar").style.width = "0%";

    tampilkanAntrian();

    prosesAntrian(antrianMesin);

    // menambah job baru
    setTimeout(()=>{

        let jobBaru =
        { idJob:"J04", namaProses:"Quality Check", durasi:35 };

        antrianMesin.push(jobBaru);

        tambahLog("Job baru ditambahkan ke antrian mesin");

        tampilkanAntrian();

    },3000);

}


// tampilkan antrian awal
tampilkanAntrian();