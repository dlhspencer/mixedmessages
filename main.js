/*
Outline:
Make Array of Fortune Cookies Messages
Make Randomize Function
Make Main Function, calls randomize function on fortune cookie message, and logs to console that message.
*/

const messageArray = ["Today it's up to you to create the peacefulness you long for.",
    "A friend asks only for your time not your money",
    "If you refuse to accept anything but the best, you very often get it.",
    "A smile is your passport into the hearts of others."
];

const randomizeFunc = () => {
    const messageArrayPosition = Math.floor(Math.random() * messageArray.length);
    return messageArrayPosition;
};

const mainFunc = () => {
    console.log(messageArray[randomizeFunc()]);
}

mainFunc();