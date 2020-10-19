var angka1 = document.getElementById('angka1');
var angka2 = document.getElementById('angka2');
var btntambah = document.getElementById('tambah');
var btnkurang = document.getElementById('kurang');
var btnbagi = document.getElementById('bagi');
var btnkali = document.getElementById('kali');
var hasil = document.getElementById('hasil');
var table = document.getElementById('tb');

function tambah() {
    let konfirmasi = confirm(`Hitung ${angka1.value} + ${angka2.value} ?`);

    if(konfirmasi){
    hasil.value= parseInt(angka1.value) + parseInt(angka2.value);

    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let operator = row.insertCell(2);
    let output = row.insertCell(3);

    cell1.textContent = angka1.value;
    cell2.textContent = angka2.value;
    operator.textContent = "+";
    output.textContent = hasil.value;

    }
}

function kurang() {
    let konfirmasi = confirm(`Hitung ${angka1.value} - ${angka2.value} ?`);

    if(konfirmasi){
        hasil.value= parseInt(angka1.value) - parseInt(angka2.value);

    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let operator = row.insertCell(2);
    let output = row.insertCell(3);

    cell1.textContent = angka1.value;
    cell2.textContent = angka2.value;
    operator.textContent = "-";
    output.textContent = hasil.value;

    }
    
}

function kali() {
    let konfirmasi = confirm(`Hitung ${angka1.value} * ${angka2.value} ?`);

    if(konfirmasi){
        hasil.value= parseInt(angka1.value) * parseInt(angka2.value);

    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let operator = row.insertCell(2);
    let output = row.insertCell(3);


    cell1.textContent = angka1.value;
    cell2.textContent = angka2.value;
    operator.textContent = "*";
    output.textContent = hasil.value;

    }
    
}

function bagi() {
    let konfirmasi = confirm(`Hitung ${angka1.value} / ${angka2.value} ?`);

    if(konfirmasi){
        hasil.value= parseInt(angka1.value) / parseInt(angka2.value);

    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let operator = row.insertCell(2);
    let output = row.insertCell(3);

   
    cell1.textContent = angka1.value;
    cell2.textContent = angka2.value;
    operator.textContent = "/";
    output.textContent = hasil.value;

    }
    
    
}

btntambah.onclick=tambah;
btnkurang.onclick=kurang;
btnbagi.onclick=bagi;
btnkali.onclick=kali;
