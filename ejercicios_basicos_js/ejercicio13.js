const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function nameFinder(nameList) {
    // Completar
    if(names.find(element => element === nameList)){
        console.log(true)
        return names.indexOf(nameList);
    }else{
        return false;
    }
}

const resultado = nameFinder("Piggy")
console.log(resultado)

