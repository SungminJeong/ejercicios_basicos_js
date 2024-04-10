const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

let usersmayores = [];
let usermenores = [];
for(const user of users){
    if(user.years >= 18){
        usersmayores.push(user.name)
    } else if(user.years < 18){
        usermenores.push(user.name)
    }
}

console.log("Usuarios mayores de edad: " + usersmayores)
console.log("Usuarios menores de edad: " + usermenores)