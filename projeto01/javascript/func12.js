function triangleCheck(lineA, lineB, lineC){
    if (lineA<lineB+lineC && lineB<lineA+lineC && lineC<lineA+lineB &&
     lineA>Math.abs(lineB-lineC) && lineB>Math.abs(lineA-lineC) && lineC>Math.abs(lineA-lineB))
     {
        return true;
     }
    else{
        return false;
    }
}

console.log(triangleCheck(3, 1, 5));