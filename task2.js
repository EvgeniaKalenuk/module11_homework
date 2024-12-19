let numOrigin = prompt("Введите число");
function check() {
  const num = +numOrigin;
  if (
    isNaN(num) ||
    num > 1000 ||
    num < 0 ||
    numOrigin === null ||
    numOrigin === ""
  ) {
    console.log("Данные неверны!");
  } else {
    if (num === 0 || num === 1) {
      console.log("Не является простым числом, ни составным");
    } else {
      let isPrime = true;
      for (i = 2; i < num; i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log("Является простым числом");
      } else {
        console.log("Не является простым числом");
      }
    }
  }
}
check()
