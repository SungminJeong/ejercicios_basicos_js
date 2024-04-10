const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];


function removeDuplicates(list) {
    // Completar
    const newDuplicates = [];
    for(let i = 0; i < list.length; i++){
        if(!newDuplicates.includes(list[i])){
            newDuplicates.push(list[i])
        }
    }
    return newDuplicates;
}

const resultado = removeDuplicates(duplicates)
console.log(resultado)
