// Task 1: Code a function declaration
function addTwoNums(a, b) {
    // Task 3: Update the addTwoNums function with a try...catch block
    try {
        // Task 4: If the passed-in arguments are not numbers, throw an error
        if (typeof a !== 'number') {
            throw new ReferenceError('the first argument is not a number');
        } else if (typeof b !== 'number') {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b);
        }
        // Console log a + b inside the try block
        
    } catch (err) {
        // Task 3: Inside the catch block, console log the err value
        console.log("Error!", err);
        console.log("It still works")
    }
}

// Task 2: Invoke the addTwoNums function with a number and a string
addTwoNums("5", 5);
