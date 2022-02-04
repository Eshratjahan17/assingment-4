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