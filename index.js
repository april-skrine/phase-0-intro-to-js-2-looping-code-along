const peepsToThank = ["Joe", "Brad", "Roger"]

function writeCards(someArray) {
    const newArray = [];
    for (let i=0; i < someArray.length; i++) {
        newArray.push(`Thank you, ${someArray[i]}, for the wonderful surprise gift!`);
    }
    return newArray;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}