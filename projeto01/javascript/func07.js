function catAndMouse(mouse,cat1,cat2){
    let dist1 = Math.abs(mouse - cat1);
    let dist2 = Math.abs(mouse - cat2);
    if (dist1 === dist2){
        return 'os gatos trombam e o rato foge';
    }
    else if(dist1>dist2){
        return 'cat2';
    }
    else{
        return 'cat1';
    }
    
}

console.log(catAndMouse(5,-1,11));