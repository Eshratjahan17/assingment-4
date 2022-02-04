//Ana to vori
function anaToVori(ana) {
    //Error handling
    if (ana <= 0) {
        return 'Number should be positive or greater than 0 ';
    }
    if (typeof ana != 'number') {
        return 'Please enter a number ';
    }
    var vori = ana * 0.0625; //Formula
    return vori;
}
var output = anaToVori(5);
console.log(output);