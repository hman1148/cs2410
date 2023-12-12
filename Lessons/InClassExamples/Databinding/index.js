const countDisplay = document.getElementById("count");
const count = new State(0);

count.subscribe((newCount) => {
    countDisplay.innerText = `${newCount}`;
});

document.getElementById("increment").addEventListener("click", () => {
    count.setValue(count.getValue() + 1);
});
document.getElementById("decrement").addEventListener("click", () => {
    count.setValue(count.getValue() - 1);
});
document.getElementById("plus5").addEventListener("click", () => {
    count.setValue(count.getValue() + 5);
});
document.getElementById("minus5").addEventListener("click", () => {
    count.setValue(count.getValue() - 5);
});