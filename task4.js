function intervalOfNumbers (num1, num2){
    let start = num1
    let intervalId = setInterval(function () {
        if (start <= num2){
            console.log(start)
            start++
            } else  clearInterval (intervalId)
            }, 1000)
        }
  intervalOfNumbers (5, 15) 