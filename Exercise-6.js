// SOAL NOMOR 1
var PERTAMA = 2
var KEDUA = 20

console.log('LOOPING PERTAMA')
while(PERTAMA <= 20){
    console.log(PERTAMA + '- I love coding');
    PERTAMA += 2;
}
console.log('LOOPING KEDUA');
while(KEDUA >= 2){
    console.log(KEDUA + '- I will become fullstack developer');
    KEDUA -= 2;
}

// SOAL NOMOR 2
console.log('LOOPING PERTAMA');
for(var PERTAMA2 = 1; PERTAMA2 <= 20; PERTAMA2++){
    console.log(PERTAMA2 + '- I love coding')
}
console.log('LOOPING KEDUA');
for(var KEDUA2 = 20; KEDUA2 >= 1; KEDUA2--){
    console.log(KEDUA2 + '- I will become fullstack developer');
}

// SOAL NOMOR 3
var input = 1
while(input <= 100){
    if((input % 2) == 0){
        console.log('Counter Sekarang =' + input)
        console.log('GENAP')
    }
    else{
        console.log('Counter Sekarang =' + input)
        console.log('GANJIL')
    }
    input ++;
}

var input = 1
while(input <= 100){
    if((input % 3) == 0){
        console.log('Counter Sekarang =' + input)
        console.log( input + ' KELIPATAN 3')
    }
    else{
        console.log('Counter Sekarang =' + input)
        console.log('""')
    }
    input += 2;
}

var input = 1
while(input <= 100){
    if((input % 6) == 0){
        console.log('Counter Sekarang =' + input)
        console.log( input + ' KELIPATAN 6')
    }
    else{
        console.log('Counter Sekarang =' + input)
        console.log('""')
    }
    input += 5;
}

var input = 1
while(input <= 100){
    if((input % 10) == 0){
        console.log('Counter Sekarang =' + input)
        console.log( input + ' KELIPATAN 10')
    }
    else{
        console.log('Counter Sekarang =' + input)
        console.log('""')
    }
    input += 9;
}