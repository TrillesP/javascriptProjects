function concatName(lista){
    return `${lista.slice(-1)}, ${lista[0]}`;
}

console.log(concatName(['foguete', 'não', 'tem', 'ré']));