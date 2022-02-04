//Problem 1
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


//Problem 3

function picnicBudget(numberOfPeople) {
    //Error handling
    if (numberOfPeople < 5) {
        return 'Please enter a number greater than 5';
    }
    if (typeof numberOfPeople != 'number') {
        return 'Please enter a number value';
    }
    //budget alloted per head
    const budget100perHead = 5000;
    const budget200PerHead = 4000;
    const budgetRestPerHead = 3000;
    //Amount For 1st 100 people
    if (numberOfPeople <= 100) {
        const budgetFor100People = numberOfPeople * budget100perHead;
        return budgetFor100People;

    }
    //Amount For 200 people
    else if (numberOfPeople <= 200) {
        const budgetFor100People = 100 * budget100perHead;
        const restPeople = numberOfPeople - 100;
        const budgetFor200People = restPeople * budget200PerHead;
        const totalBudget = budgetFor100People + budgetFor200People;
        return totalBudget;
    }
    //Total Amount For rest of people
    else {
        const budgetFor100People = 100 * budget100perHead;
        const budgetFor200People = 100 * budget200PerHead;
        const restOfPeople = numberOfPeople - 200;
        const budgetForRestPeople = restOfPeople * budgetRestPerHead;
        const grandTotalBudget = budgetFor100People + budgetFor200People + budgetForRestPeople;
        return grandTotalBudget;

    }

}

const people = picnicBudget(100);
console.log(people);

//Problem 4
function oddFriend(friends) {
    //Error handling
    if (typeof friends != 'object') {
        return 'please give a string value';

    }

    let stringcount = '';
    for (const names of friends) {
        //Finding odd number of string length
        if (names.length % 2 != 0) {
            stringcount = names;
            return stringcount;
        }
    }

}
let namesOfFrnds = ['abcd', 'tara', 'bcdac', 'jawaher', 'dola'];
var stringCount = oddFriend(namesOfFrnds);
console.log(stringCount);