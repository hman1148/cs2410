const square = document.getElementById("square");

document.body.addEventListener("click", (e) => {

    let x = e.offsetX;
    let y = e.offsetY;

    square.animate([
        {
            transform: `translate(${x - 64}px, ${y - 64}px)`
        }
    ], {
        easing: "ease",
        fill: "forwards",
        duration: 300
    }).addEventListener("finish", () => {
        console.log("I am done");
    });    
});