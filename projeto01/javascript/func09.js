function encode(frase) {
    let resp = frase.replace(/a/g, 1);
    let resp2 = resp.replace(/e/g, 2);
    let resp3 = resp2.replace(/i/g, 3);
    let resp4 = resp3.replace(/o/g, 4);
    let resp5 = resp4.replace(/u/g, 5);
    return resp5;
}
function decode(frase) {
    let Obj = {
        '1':'a',
        '2':'e',
        '3':'i',
        '4':'o',
        '5':'u'
    }
    let resposta = frase.replace(/1|2|3|8|4|5/g, function (x) {
        return Obj[x];});
    return resposta;
}


console.log(encode('hi there'));
console.log(decode('n4s v2m4s n4 8 d31 d4 1m4r'));