function highestCount(lista){
    let maior = Math.max(...lista);
    let cont = 0;
    for (let i in lista){
        if (lista[i] === maior){
            cont++;
        }
    }
    return cont;
}

console.log(highestCount([0,0,0]));