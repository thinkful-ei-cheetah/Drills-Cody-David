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


