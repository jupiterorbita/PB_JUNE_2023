// ARRAYS

// arrays allow us to group related data with each other
// they are built with square brackets []
// the data inside of arrays are called 'elements'
// we separate elements with a comma ,

// index             0          1         2 ...   3
var animalArray = ["giraffe", "lion" , "zebra"];
console.log(animalArray);

var anotherAnimal = "eagle";

animalArray.push(anotherAnimal);

// show me the FIRST animal
console.log(animalArray[0]) // giraffe

// show me the LAST element
// Array.length-1 -> gives me the LAST index 
console.log(animalArray.length-1)


// In JavaScript, we can have different datatypes inside of arrays
var dog1 = ['Teddy', 7, 'brown and white', true, ['tennis ball', 'rubber bone']];
var dog2 = ['Cedar', 5, 'golden'];

// first step is accessing the value in the outer array, 
// then the second step is accessing the value of the inner array
// dog1[4][0] --> ['tennis ball', 'rubber bone'][0]
// console.log(dog1[4][0]); 
// console.log(dog2);


// How do I access the data inside of an array?
// By their index
// zero-index, meaning the first index is 0
// console.log(dog1[0])
// what index accesses the third thing in the array
// console.log(dog1[2])


// How do we add things and remove things from the array
// we can only add and remove from the end of the array
// push() function adds, pop() function removes
dog2.push('biscuit')
dog1.pop()
dog1.pop()

// how do we change a element in the array?
// access the element by its index and use the assignment operator (=)
dog2[0] = 'Leia'

// console.log(dog1)
// console.log(dog2)

dog3 = ['Buck', 4, 'chocolate']

console.log(dog3.length)
console.log(dog3[dog3.length - 1])
// dog3.pop()
// console.log(dog3.length)


// CTRL + /
// this is a single line comment

/*
    this is a 
    multi-line
    comment!
*/