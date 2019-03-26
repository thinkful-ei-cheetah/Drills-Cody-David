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

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES