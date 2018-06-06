var letters = {
};

function countLetters(string) {

  var string =  string.split(" ").join('').toLowerCase();

  for (value of string) {
      if (!letters.hasOwnProperty(value)) {
        letters[value] = 1;
      } else {
        letters[value] += 1;
      }
    }
return letters
}

console.log(countLetters("lighthouse in the house"));