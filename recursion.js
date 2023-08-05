function goMyCode(word) {
    if (word.length <= 1) {
      return true;
    }
  

    if (word[0] === word[word.length - 1]) {
      
      return goMyCode(word.slice(1, word.length - 1));
    } else {
      return false;
    }
  }
  
  console.log(goMyCode(""));
  console.log(goMyCode("python"));
  console.log(goMyCode(""));
  console.log(goMyCode("react")); 
  console.log(goMyCode("javascript"));
  