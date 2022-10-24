function hydrate(frase){

    let bebidas = frase.match(/\d+/g);
    if (bebidas == null){
        return null;
    }
    for (let i of bebidas){
        if (i<1 || i>9){
            return null;
        }
    }

    let copos = 0;
    for (let num of bebidas){
        copos = copos+Number(num);
    }
    if (Number(bebidas) === 1){
        return `1 copo de água`;
    }
    else{
        return `${copos} copos de água`;
    }
}

console.log(hydrate('quero 2 cervejas e 3 cachaças'))