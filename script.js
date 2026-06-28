function simpan() {
    let ayam = document.getElementById("ayam").value;
    let nasi = document.getElementById("nasi").value;
    let teh = document.getElementById("teh").value;

    localStorage.setItem("ayam", ayam);
    localStorage.setItem("nasi", nasi);
    localStorage.setItem("teh", teh);

    document.getElementById("notif").innerText = "Pesanan disimpan!";
}

function reset() {
    document.getElementById("ayam").value = 0;
    document.getElementById("nasi").value = 0;
    document.getElementById("teh").value = 0;

    localStorage.clear();

    document.getElementById("notif").innerText = "Pesanan dikosongkan!";
}