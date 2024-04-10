const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 125 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const pelipequeña = [];
const pelimediana = [];
const peligrande = [];

for(const movie of movies){
    if(movie.durationInMinutes < 100){
        pelipequeña.push(movie);
    } else if(100 <= movie.durationInMinutes && movie.durationInMinutes < 200 ){
        pelimediana.push(movie);
    } else if(movie.durationInMinutes >= 200){
        peligrande.push(movie);
    }
}
console.log(pelipequeña)
console.log(pelimediana)
console.log(peligrande)


/*
const pelipequña = movies.filter(movie => movie.durationInMinutes < 100);

const pelimediana = movies.filter(movie =>  movie.durationInMinutes >= 100 && movie.durationInMinutes < 200);

const peligrande = movies.filter(movie => movie.durationInMinutes >= 200);

console.log(pelipequña);
console.log(pelimediana);
console.log(peligrande);
*/