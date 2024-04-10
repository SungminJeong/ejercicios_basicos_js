const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
  // Completar
    let arr = [];
    for(let i = 0; i < list.length; i++){
        if(typeof list[i] === "number"){
            arr.push(list[i]);
        } else if(typeof list[i] === "string"){
            arr.push(list[i].length)
        }
    }
    console.log(arr)
    let average = 0;
    let sum = 0;
    for (const num of arr) {
        sum = sum + num;
    }
    average = sum / arr.length;
    console.log(average)
}

averageWord(mixedElements)