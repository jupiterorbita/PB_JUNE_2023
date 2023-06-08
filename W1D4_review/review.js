// review
//Using what you've learned about functions and parameters, create a function that, given a name, will say "good day" to that person by name.


// create a function
function greet(firstName, timeOfDay) {
    if (firstName == "Count Dooku") {
        return "I'm coming for you, Dooku!";
    } else {
        return "Good day " + firstName + " it's " + timeOfDay;
    }
}



// var something = greet("bob", "morning");

// console.log(something)

// -------------------

// write a function that will push in an array all even numbers staring from 1-10;
// R.I.O.T.
function createEvenArray() {
    var evenArray = [];
    // create a loop from 1-10
    for (var i = 1; i <= 10; i++) {
        // on every number check to see if that number is even
        if (i % 2 == 0) {
            // this is an even number
            // if it is even push to array
            evenArray.push(i)
            return evenArray
        }
    }
}
console.log(

    createEvenArray()
)