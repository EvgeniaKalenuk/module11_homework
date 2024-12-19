let arr = [1, 2, 3, 'X', 4, 5, 6, null, 7, 8, 'Hello', 9, 10]
let even = 0
let odd = 0
let other = 0

function numElem(){
  for (let i = 0; i < arr.length; i++){
  if((arr[i] === 0) || (typeof(arr[i]) !== 'number')){
    other++
  } else {
      if (arr[i] % 2 === 0){
        even++
      } else {
        odd++
      }
  }
}
console.log('Четные:' + even)
console.log('Нечетные:' + odd)
console.log('Другие:' + other)
}

numElem()