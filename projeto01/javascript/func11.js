function generatePhoneNumber(lista){

    let obj = {};
    let erro = false;
    let cont = 1;

    for (let num of lista){
        if (num<0 || num>9){
            erro = true;
        }
        if (obj[num] == null){
            obj[num] = 1;
        }
        else{
            obj[num]++;
        }
        if (obj[num]>cont){
            cont = obj[num]
        }
        if (cont>=3){
            erro = true;
        }
    }

    if (lista.length != 11){
        return 'Array com tamanho incorreto.';
    }
    else if(erro == true){
        return 'não é possível gerar um número de telefone com esses valores';
    }
    else{
        let ddd = `${lista[0]}${lista[1]}`
        let numero = `${lista[2]}${lista[3]}${lista[4]}${lista[5]}${lista[6]}-${lista[7]}${lista[8]}${lista[9]}${lista[10]}`
        return `(${ddd}) ${numero}`;
    }
}

console.log(generatePhoneNumber([1, 2, 3, 5, 3, 6, 7, 1, 9, 5]));