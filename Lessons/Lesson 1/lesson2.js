const PI = 3.14159265;

const myName = "Hunter";

const betterString = `My name is ${myName}`;

const values = [1,2,3,4,5,6,7];

console.log(values);

values.push(8);

values.shift(); //shifts a value from the front of the array

//Objects

let person = {
    name: "Hunter",
    age: 21,
    wealth: "Well-off"
}

console.log(person);
console.log(person.name);

person.address = "625 E 700 N"

console.log(person)
console.log(person.address);

// removing keys 
delete person.address; // don't do this 


// null and undefined 

const aNullVal = null;
const aUndefVal = undefined;


const a = [];
a.omeattr = "Test";
console.log(a.omeattr);

const b = 10;
b.someattr = "Test";
console.log(b.someattr);

const c = "Some String";
c.someAttr = "Test";
console.log(c.someAttr);

console.log(10 + []);

