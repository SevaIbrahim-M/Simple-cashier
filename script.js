function hitungTransaksi() {
//Membuat fungsi pada id tersebut biasanya untuk tombol
const nama = document.getElementById('namaBarang').value;
const harga = parseFloat(document.getElementById('hargaBarang').value) || 0;
const jumlah = parseInt(document.getElementById('jumlahBarang').value) || 0;
//Document ini untuk mengakses halaman sih htmlnya ia tidak akan jalan kalau tidak dipakai
//getElementbyid() mencari id elemen di html
//.valueitu untuk mengambil isi inputnya

if (!nama || harga <= 0 || jumlah <= 0) {
        alert("Harap isi semua data dengan benar!");
        return;
    }

const subtotal = harga * jumlah;

let persentaseDiskon = 0;
if (subtotal >=500000) {
    persentaseDiskon = 10;
} else if (subtotal >= 300000) {
    persentaseDiskon = 5;
} else {
    persentaseDiskon = 0;
}

const nominalDiskon = (subtotal * persentaseDiskon) /100;
const totalBayar = subtotal - nominalDiskon

document.getElementById('resNama').innerText = nama;
document.getElementById('resSubtotal').innerText = formatRupiah(subtotal);
document.getElementById('resDiskon').innerText = `${persentaseDiskon}% (${formatRupiah(nominalDiskon)})`;
document.getElementById('resTotal').innerText = formatRupiah(totalBayar);

    document.getElementById('hasilBox').style.display = 'block';
}
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
    }).format(angka);
}