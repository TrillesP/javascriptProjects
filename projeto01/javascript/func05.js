function footballPoints(wins,ties){
    let resultado = wins*3 + ties;
    return `O time fez ${resultado} pontos.`
}

console.log(footballPoints(1,2));