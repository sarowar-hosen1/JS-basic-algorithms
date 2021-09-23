function findLongestWord(str) {
    const srtSplit = str.split(' ');
    var longestWord = "";
  
    srtSplit.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  findLongestWord("I love my country");

