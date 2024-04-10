const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  // Completar
    let sum = 0;
    let averageNum = 0;
    for(let i = 0; i < numberList.length; i++){
        sum += numberList[i];
    }
    averageNum = sum / numberList.length;
    return averageNum;
}
const result = average(numbers)
console.log(result)