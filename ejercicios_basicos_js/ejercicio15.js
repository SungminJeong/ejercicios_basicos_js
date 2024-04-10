const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']


for(let i = 0; i < products.length; i++){
    const camiseta = 'Camiseta'
    if(products[i].includes(camiseta)){
        console.log(products[i])
    }
}
