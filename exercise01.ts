// EXERCISE 01

// SOAL 1
// Input panjang dan lebar
let length = 5;
let width = 3;

// Menghitung luas
let area = length * width;

// Menampilkan hasil
console.log("Luas persegi panjang adalah:", area);


// SOAL 2
// Input panjang dan lebar
let length = 5;
let width = 3;

// Menghitung keliling
let perimeter = 2 * (length + width);

// Menampilkan hasil
console.log("Keliling persegi panjang adalah:", perimeter);


// SOAL 3
// Input jari-jari
let radius = 5;

// Menghitung diameter, keliling, dan luas
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * Math.pow(radius, 2);

// Menampilkan hasil
console.log("Diameter lingkaran adalah:", diameter);
console.log("Keliling lingkaran adalah:", circumference);
console.log("Luas lingkaran adalah:", area);


// SOAL 4
// Input dua sudut
let a = 80;
let b = 65;

// Menghitung sudut ketiga
let c = 180 - (a + b);

// Menampilkan hasil
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