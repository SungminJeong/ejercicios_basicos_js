const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  // Completar código
    let sum = 0;
    for(let i = 0; i < numberList.length; i++){
        sum += numberList[i]
    }
    console.log(sum)
}

sumNumbers(numbers)
