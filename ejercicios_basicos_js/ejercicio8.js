let str = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function solution(stringList) {
    let newArr = [];
    for(const word of stringList){
        newArr.push(word.length)
    }
    const max = newArr.indexOf(Math.max(...newArr));
    console.log("la palabra más larga es: " + stringList[max])
}


solution(str);