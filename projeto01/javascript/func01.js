function compareTrue(x,y){
    if (x && y === true){
        return true;
    }
    else{
        return false;
    }
}

abacaxi = false;
banana = true;
abacate = false;
pera = true;
console.log(compareTrue(banana,pera));