const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for(const haha of placesToTravel){
    if(haha.id === 11 || haha.id === 40){
        placesToTravel.splice(placesToTravel.indexOf(haha), 1)
    }
}

console.log(placesToTravel)