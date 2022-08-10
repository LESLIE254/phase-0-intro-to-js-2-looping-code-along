
function writeCards(names, eventName) {
    const arrayCounter = names.length;
    const message = [];

    for (let i = 0; i < arrayCounter; i++) {
   message[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
    }
    return message;

}
function countDown() {
    let countDown = 10;
while (countDown >= 0) {
    console.log(countDown--);
}
}
