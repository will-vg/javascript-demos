let myName = 'name';

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What is your name? ', myName => {
    console.log('Hi, ' + myName + "!");
    readline.close();
});