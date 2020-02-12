let = caeserDecipher = (message, shift) => {

    message = message.toLowerCase();
    var array = message.split(" ");
    var newArray = [];
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    if (shift > 25) {
        shift = shift % 26;
    }

    for (var i = 0; i < array.length; i ++) {
        var word = [];
        for (var j = 0; j < array[i].length; j ++) {
            var index = alphabet.indexOf(array[i][j]);
            if (shift > index) {
                var letter = alphabet[index - shift + 26];
            }
            else {
                var letter = alphabet[index - shift];
            }
            word.push(letter);
        }
        newArray.push(
            word.join("")
        );
    }
    return newArray.join(" ");
}

console.log(caeserDecipher('Genius without education is like silver in the mine', 13))