const letterPool = 
       {'A':9,
        'B':2,
        'C':2,
        'D':4,
        'E':12,
        'F':2,
        'G':3,
        'H':2,
        'I':9,
        'J':1,
        'K':1,
        'L':4,
        'M':2,
        'N':6,
        'O':8,
        'P':2,
        'Q':1,
        'R':6,
        'S':4,
        'T':6,
        'U':4,
        'V':2,
        'W':2,
        'X':1,
        'Y':2,
        'Z':1
    }




export const drawLetters = () => {
  // Implement this method for wave 1
    const listLetters = [];
    while (listLetters.length != 10) {
        let letters = Object.keys(letterPool);
        let randomIndex = Math.floor(Math.random()*letters.length);
        let randomLetter = letters[randomIndex];
        let value = letterPool[randomLetter];
        if (value > 0) {
            letterPool[randomLetter] = value -1;
            listLetters.push(randomLetter);
        }
    }
  
    return listLetters
}


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
