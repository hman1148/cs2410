const age = 30;
const money = 30;


// soft comparison. Compares across all data types
if (age == money) {
    console.log("True");
}

// strict comparison 

if (age === money) {
    console.log("True");
}

// for each loop
const nums = [3, 3, 42, 1, 5, 2, 7,9,6,43,3];

for (const value of nums) {
    console.log(value);
}