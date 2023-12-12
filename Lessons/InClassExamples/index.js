const myName = "Hunter";

// pre-es5 functions 
function sayName(name) {
    console.log(name);
}
sayName("Hunter");


// anonymous functions
const func1 = () => {
    let result = Math.E * Math.log10(2);
    console.log(result);
}

const sayHello = name => console.log(`Hello ${name}`);


setTimeout(() => console.log("I got called"), 5000);


const data = [1, 2, 3, 4];

// let copyArray = (data) => {
//     const result = [];
//     for (const x of data) {
//         result.push(x);
//     }
//     return result;
// }

// spred operator replaces this function

const dataCopy = [...data]; // not a deep copy 

function printThreeNums(val1 , val2, val3) {
    console.log(val1);
    console.log(val2);
    console.log(val3);
}


printThreeNums(...data);


function printMyArguments() { // difference between arrow and function key word
        // every function call will have an invisible arguments parameter that contains an unlimited amount of arguments
        console.log(arguments.map(() => {}));
}

printMyArguments("Hello", ["Hi"])

// with arrow funcitons

const myFunct = (...args) => {
    console.log(args);
}

myFunc(1, 2, "asdf", {name: "Hunter"})



function delay(callback, duration) {
    
    return (...args) => {
        setTimeout(() => callback(...args), duration);
    }// composition  

}
function sayHello (name) {
    console.log(`Hello ${name}`);
}
const delaySayHello = delay(sayHello, 100000);


