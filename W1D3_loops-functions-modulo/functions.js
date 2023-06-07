// functions

// create the function
function greet() {
    // console.log("hello");
    return "hello";
}

// call the function / invoke 
// console.log(greet());

// greet(); // "hello"


// ! A FUNCTION IS EQUAL TO ITS RETURN

function greetSomeone(person) {
    console.log("person is ", person)

    if (person == "Martin") {
        console.log("Hello, partner!");
    }
    else {
        console.log("Greetings, Earthling!");
    }
}
// greetSomeone("Martin");


// create a function that takes in some ingredients and loops over the ingredients
//                 0   1    2   3  4   5
var ingredients = [-33, -44, -55, -5, -100]

function loopOverIngredients(items) {
    // console.log(items)

    // create a var to store the largestNum;
    var largest = items[0];
    for (var x = 0; x < items.length; x++) {
        console.log("largest: ", largest);
        console.log("items[x]", items[x]);
        console.log("----------------------")
        // compare the largest num with the num from the array looking at
        if (items[x] > largest) {
            largest = items[x];
        }
    }
    // after the loop ends, what is largest?
    console.log(largest)
    // return it back to the user
    return largest;
}

console.log(

    loopOverIngredients(ingredients)
)