const button = document.querySelector(".button");

button.addEventListener("mousedown", () => {
    button.dataset.clicked = "true";
});

button.addEventListener("mouseup", () => {
    button.dataset.clicked = "false";
});
