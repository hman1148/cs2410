const container = document.getElementById("container");
const button = document.getElementById("button");


const htmlToElement = (text) => {
    const div = document.createElement('div');
    div.innerHTML = text;

    return div.firstElementChild;
    // this function allows us to create an html element and its subtress in one function
}



/* Imparative example */

// button.addEventListener("click", () => {

//     const div = document.createElement('div'); // how to create an element from javascript 
//     const input = document.createElement('input');
//     input.type = "checkbox";

//     input.addEventListener('change', () => {
//         console.log('I got changed');
//     })


//     div.appendChild(input); // how to add the input into the div tag 

//     const textNode = document.createTextNode("Click me!");
//     div.appendChild(textNode);

//     container.appendChild(div);
// });


const tag = (strings, ...vars) => { 
    let result = "";
    for (let i = 0; i < vars.length; i++) {
        result += strings[i] + vars[i].toFixed(2);
    }
    result += string[strings.length - 1];
    return result;
}


const num1 = 10 / 3;
const ouput =  tag`Your output is ${num1} and ${100.2498123044}`;



console.log(output);


/* Declarative example*/
button.addEventListener('click', () => {

    const result = Math.random();

    // for (let i = 0; i < 1000000000; i++) {
    //     if (result == 0) {
    //         console.log(i);
    //         result = i;
    //     }
    // }


    const div = htmlToElement(`<div><input type = 'checkbox' />${result}</div>`);

    const input = div.querySelector('input'); // returns the first thing the query matches

    input.addEventListener('change', () => {
        console.log('I got changed');
    });

    container.appendChild(div);
})