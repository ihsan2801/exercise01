// EXERCISE 01


// SOAL 1
// Input panjang dan lebar
let l1 = 5;
let p1 = 10;
const luasPersegiPanjang: number = p1 * l1
// Hasil
console.log(luasPersegiPanjang); 

// SOAL 2
// Input panjang dan lebar
l1 = 3;
p1 = 5;
const perimeterPersegiPanjang: number = 2 * (p1 + l1);
// Hasil
console.log(perimeterPersegiPanjang);

// SOAL 3
// Input jari-jari
let radius = 5;
// Menghitung Diameter, Keliling, dan Luas
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * Math.pow(radius, 2);
// Hasil
console.log("Diameter lingkaran adalah:", diameter);
console.log("Keliling lingkaran adalah:", circumference);
console.log("Luas lingkaran adalah:", area);


// SOAL 4
// Input dua sudut
let a = 80;
let b = 65;
// Menghitung sudut ketiga
let c = 180 - (a + b);

// Hasil
console.log("Sudut ketiga adalah:", c);


// SOAL 5
// Input jumlah hari
let days = 400;

// Menghitung tahun, bulan, dan sisa hari
let years = Math.floor(days / 365);
let remaining_days = days % 365;
let months = Math.floor(remaining_days / 30);
let days_left = remaining_days % 30;

// Menampilkan hasil
console.log(`${days} hari = ${years} tahun, ${months} bulan, dan ${days_left} hari`);


// SOAL 6
const date1: Date = new Date ("2022-01-20");
const date2: Date = new Date ("2022-03-30");
const perbedaanDate = (date2.getTime() - date1.getTime()) / (24 * 3600 * 1000);
console.log(perbedaanDate);