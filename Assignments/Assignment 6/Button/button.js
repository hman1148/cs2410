const button = document.getElementById("btn");
const buttonHTML = document.getElementById("button-HTML");
const buttonCSS = document.getElementById("button-CSS");
const buttonJS = document.getElementById("button-JS");


button.addEventListener("click", (e) => {
    e.target.dataset.pressed = "true";
});

button.addEventListener("mouseup", (e) => {
    e.target.dataset.pressed = "false";

});

button.addEventListener("mouseleave", (e) => {
    e.target.dataset.pressed = "false";
});


buttonHTML.innerText = `
            <button class = "btn-blue" id = "btn">Click me</button>
            <button class = "btn-red" id = "btn">Click me</button>
            <button class = "floating-button" id = "btn"><span class="material-symbols-outlined">
            apps
            </span></button>
`;


buttonCSS.innerText = `
.btn-blue {
    color: black;
    padding: 16px 32px; 
    background: aqua;
    font-weight: bold;
    text-transform: upper;
    border-radius: 32px;
    border: none;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, .24);
    transition: all .3s ease;
}

.btn-blue:hover {
    background-color: black;
    color: white;
}

.btn-red {
    color: white;
    padding: 16px 32px;
    background-color: #FF2E2E;
    font-weight: bold;
    text-transform: upper;
    border-radius: 32px;
    border: none;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
    transition: all .3s ease;
}

.btn-red:hover {
    background-color: white;
    color: black;
}

.floating-button {
    background-color: black;
    border-radius: 50%;
    color: white;
    width: 75px;
    height: 75px;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
    transition: all .5s ease;
}

.floating-button:hover {
    background-color: white;
    color: black;
}

#btn[data-pressed="true"] {
    box-shadow: none;
}
`;

buttonJS.innerText = `
const button = document.getElementById("btn");

button.addEventListener("click", (e) => {
    e.target.dataset.pressed = "true";
});

button.addEventListener("mouseup", (e) => {
    e.target.dataset.pressed = "false";

});

button.addEventListener("mouseleave", (e) => {
    e.target.dataset.pressed = "false";
});
`;