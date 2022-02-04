// Problem 2
function pandaCost(singaraQuantity, somucaQuantity, jilapiQuantity) {
    //Error handling
    if (singaraQuantity < 0 || somucaQuantity < 0 || jilapiQuantity < 0) {
        return 'Please enter a positive value';
    }
    if (typeof singaraQuantity != 'number' || typeof somucaQuantity != 'number' || typeof jilapiQuantity != 'number') {
        return 'Please enter a number';
    }
    //prices counting
    var singaraPrice = singaraQuantity * 7;
    var somucaPrice = somucaQuantity * 10;
    var jilapiPrice = jilapiQuantity * 15;
    var totalprice = singaraPrice + somucaPrice + jilapiPrice;
    return totalprice;
}

const quantities = pandaCost(2, 5, 3);
console.log(quantities);