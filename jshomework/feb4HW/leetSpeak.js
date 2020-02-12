
let = leetSpeak = (text) => {
    const leettext = text
    .toUpperCase()
    .replace(/a/gi, 4)
    .replace(/e/gi, 3)
    .replace(/g/gi, 6)
    .replace(/i/gi, 1)
    .replace(/o/gi, 0)
    .replace(/s/gi, 5)
    .replace(/t/gi, 7);

    return leettext;
};

console.log(leetSpeak("I am a great hacker."));