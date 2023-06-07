// ! ======= FOR LOOPS ======== 

// initialization
// condition
// final expression

// ! recipe
// for(initialization; condition; final expression){

// }
// create a loop that goes from 1 to 10

// start var
for(var i = 1; i <= 10; i++){
    console.log(i);
}

i++ // increment the var value by 1
i = i + 1
i += 1

//                 0          1            2          3 
// var animals = ['Red Panda', 'Elephant', 'Koala', 'Bear'];

for(var i = 0; i < animals.length; i++) {
    console.log(animals[i]) // animals[0] animals[1] animals[2]...
}
//                 0           1          2        3
var animals = ['Red Panda', 'Elephant', 'Koala','Bear'];
// only console.log "koala" if you find it

for(var i = 0; i < animals.length; i++) {

    console.log(i)
    // condition
    if(animals[i] === 'Koala') {
        console.log("hey we found the Koala!", i);
        break;
    }
}


/* ------------------ group activity -----------

    write a for-loop that starts at year 1996 and ends in 2023
    on every year (iteration) have it log the year and the string "JS is awesome!"
    on every 10 years, log "happy decade of JS!"
    when you reach the end, log "HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈"

    ex. "1996 JS is awesome"
        "1997 JS is awesome"
        ...
        "2004 JS is awesome"
        "2005 JS is awesome"
        "happy decade of JS!"
        "2007 JS is awesome"
        ....
        "2022 JS is awesome"
        "HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈"

 */