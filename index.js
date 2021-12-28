const names = ["Charlie", "Samip", "Ali"]
const eventName = "Birthday"

function writeCards(names) {
    const newNames = [...names];
    for (let i = 0; i < newNames.length; i++) {
        console.log(`Thank you ${names[i]} for the ${eventName} gift!`);
    }

    return newNames;
}

writeCards(names);




let number = 10;

function countDown(number) {
    while (number >= 0) {
    console.log(number--);}
};

countDown(number);