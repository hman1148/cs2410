const input = document.getElementById("user-input");
const button = document.getElementById("button");
const output = document.getElementById("output");


button.addEventListener("click", () => {

    const text = input.value;
    let fuddifyText = text.replaceAll("r", "w");
    fuddifyText.replaceAll("R", "W");

    //if we want to clear the fields
    input.value = "";

    output.innerHTML = `<h1>${fuddifyText}</h1>`;
});

const divs = document.getElementsByTagName("div");

// how to createa na array copy of divs
[...divs];

input.addEventListener("input", (e) => {
        // will grab all events and actions that the user makes while inputing data
        // console.log(e);
});

input.addEventListener("blur", (e) => {
    console.log(e);
});

input.addEventListener("focus", (e) => {
    console.log(e);
});



const bigFont = document.getElementsByClassName("big-font");
console.log(bigFont);

document.querySelectorAll("div *"); //all elements that are children of a div tag
