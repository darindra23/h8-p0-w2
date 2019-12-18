function konversiMenit(menit) {
  if( menit > 60){
    var jam = Math.floor(menit / 60) 
    var menit1 = menit % 60
    if(menit1 < 10){
      return `${jam}:0${menit1}`
    } else{
      return `${jam}:${menit1}`
    }
  } else{
    return `0:${menit}`
  }
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00