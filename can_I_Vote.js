//CODECADEMY JAVASCRIPT CODING CHALLENGES - can_I_Vote challenge

// STARTING CODEBASE

//Task 1 - The most common minimum age to vote is 18. 
// Write a function canIVote() that takes in a number, representing the person’s age, 
// and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.

// Write your function here:
const canIVote = number => {
    if (number > 17) {
        return true;
    } else {
        return false;
    }
}

// Testing canIVote function
console.log(canIVote(25));
console.log(canIVote(17));
console.log(canIVote(58));
console.log(canIVote(15));





// Uncomment the line below when you're ready to try out your function
// console.log(canIVote(19)) // Should print true

// We encourage you to add more function calls of your own to test your code!