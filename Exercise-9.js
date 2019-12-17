// SOAL NOMOR 1
const shoutOut = () => 'Halo Function!'

console.log(shoutOut())

// SOAL NOMOR 2
const calculateMultipy = (num1,num2) => num1 * num2

var num1 = 5
var num2 = 6

var hasilperkalian = calculateMultipy(num1,num2)
console.log(hasilperkalian)

// SOAL NOMOR 3
const processsentence =  (name,age,address,hobby) => `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullsentence = processsentence(name,age,address,hobby)
console.log(fullsentence) 