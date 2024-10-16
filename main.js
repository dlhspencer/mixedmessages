/*
Outline:
Make Array of Fortune Cookies Messages
Make Array of Random Authors
Make Randomize Function
Make Main Function, calls randomize function on fortune cookie message, and logs to console that message.
*/

const messageArray = [
    "Today it's up to you to create the peacefulness you long for.",
    "A friend asks only for your time not your money.",
    "If you refuse to accept anything but the best, you very often get it.",
    "A smile is your passport into the hearts of others."
];

const authorArray = [
    "Abraham Lincoln",
    "Homer Simpson",
    "Albert Einstein"
];

const randomizeFunc = (arr) => {
    const arrPosition = Math.floor(Math.random() * arr.length);
    return arrPosition;
};

const mainFunc = () => {
    console.log(messageArray[randomizeFunc(messageArray)] + " -" + authorArray[randomizeFunc(authorArray)]);
}

mainFunc();