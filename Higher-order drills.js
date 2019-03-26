//1.

function repeat(fn, n) {
    let times = n;
    for (let i = 1; i <= times; i++) {
        fn();
    }
}

function hello() {
    console.log("Hello World");
}

function goodbye() {
    console.log("Goodbye World")
}

// repeat(hello, 5);
// repeat(goodbye,5);


//2.

function filter(arr,fn) {
    let newArray = []
    arr.map(word => {
        if(fn(word) === true){
            newArray.push(word)
        }
    })
    return newArray;
}
//challange 
// function filter(arr,fn) {
//     let newArray = []
//     arr.map(word => fn(word) && word[0] ? newArray.push(word): undefined )
//     return newArray
       
// }
// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

// console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


//3.
function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;       
    return function (location){
        warningCounter++ ;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        if (warningCounter > 1){
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
        }
        else {
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
        }
        }
    }

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const tornadoWarning = hazardWarningCreator('Wind on the Road');
const blizzardWarning = hazardWarningCreator('Snow on the Road');

// rocksWarning('Main St and Pacific Ave');
// tornadoWarning('21st and Atlantic Ave');
// blizzardWarning('Something st and Arctic Ave');

//4.



function forEachFilterMap(arr) {

    // This uses filter to remove any array with either number being negative
    let newArr = arr.filter(array => array[0] >= 0 && array[1] >= 0);

    
    // This uses map to return the total steps from each array
    let mapArray = arr.map(array => Math.abs(array[0]) + Math.abs(array[1]));
    
    // This uses forEach to log out how many steps the turtle took in each case
    arr.forEach(array => Math.abs(array[0]) + Math.abs(array[1]));

}

console.log(forEachFilterMap([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]));
