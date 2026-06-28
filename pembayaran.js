let ayam = localStorage.getItem("ayam") || 0;
let nasi = localStorage.getItem("nasi") || 0;
let teh = localStorage.getItem("teh") || 0;

let total = 0;
let tabel = document.getElementById("tabel");

function formatRupiah(angka) {
    return "Rp. " + Number(angka).toLocaleString("id-ID") + ",00";
}

function tambah(nama, qty, harga) {
    qty = parseInt(qty);

    if (qty > 0) {
        let row = tabel.insertRow();

        row.insertCell(0).innerHTML = nama;
        row.insertCell(1).innerHTML = qty;
        row.insertCell(2).innerHTML = formatRupiah(harga * qty);

        total += harga * qty;
    }
}

tambah("Ayam Goreng", ayam, 15000);
tambah("Nasi Goreng", nasi, 12000);
tambah("Es Teh Manis", teh, 5000);

document.getElementById("total").innerHTML = formatRupiah(total);

function kirim() {
    let file = document.getElementById("bukti").value;

    if (file === "") {
        document.getElementById("pesan").innerText =
            "Silakan upload bukti terlebih dahulu!";
        document.getElementById("pesan").style.color = "red";
    } else {
        document.getElementById("pesan").innerText =
            "Terima kasih sudah membeli produk kami. Ditunggu pembelian selanjutnya 😊";
        document.getElementById("pesan").style.color = "green";
    }
}