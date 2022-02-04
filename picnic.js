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