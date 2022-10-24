function fizzBuzz(lista){
    for (let i in lista){
        if (lista[i]%3===0 && lista[i]%5===0){
            lista[i] = 'fizzBuzz';
        }
        else if (lista[i]%3===0){
            lista[i] = 'fizz';
        }
        else if (lista[i]%5===0){
            lista[i] = 'buzz';
        }
        else{
            lista[i] = 'bug!';
        }
    }
    return lista;
}


console.log(fizzBuzz([9, 25]));