function longVowels(text){
    const looongtext = text
    .replace(/aa/gi, 'aaaaa')
    .replace(/ee/gi, 'eeeee')
    .replace(/ii/gi, 'iiiii')
    .replace(/oo/gi, 'ooooo')
    .replace(/uu/gi, 'uuuuu');
    return looongtext;
};

console.log(longVowels('Good morning'))