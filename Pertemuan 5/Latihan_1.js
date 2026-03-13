function hitungLingkaran(jariJari){

    let luas = Math.PI * jariJari * jariJari;
    let keliling = 2 * Math.PI * jariJari;

    return {
        luas: Math.round(luas),
        keliling: Math.round(keliling)
    };
}

function hitung(){

    let r = document.getElementById("jariJari").value;

    if(r === ""){
        alert("Masukkan jari-jari terlebih dahulu!");
        return;
    }

    let hasil = hitungLingkaran(r);

    document.getElementById("luas").innerHTML =
        "Luas Lingkaran : " + hasil.luas;

    document.getElementById("keliling").innerHTML =
        "Keliling Lingkaran : " + hasil.keliling;

    console.log("Jari-jari:", r);
    console.log("Luas:", hasil.luas);
    console.log("Keliling:", hasil.keliling);
}