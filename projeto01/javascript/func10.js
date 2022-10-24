function techList(lista,pessoa){
    if (lista == null){
        return 'Vazio!'
    }
    else{
        let obj = [];
        for (let i in lista){
            obj[i] = {tech:lista[i], name:pessoa};
        }
        return obj;
    }
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],'Lucas'));