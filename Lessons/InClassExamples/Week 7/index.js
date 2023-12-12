// document.getElementById("background").addEventListener("change", (e) => {

//     document.body.style.setProperty("--background-color", e.target.value);

// });

document.body.addEventListener("mousedown", (e) => {
    const mouseMove = (e2) => {
        const square = document.querySelector(".square");
        square.style.setProperty(
            '--top-offset',
            `${e.clientY}px`
        )
        square.style.setProperty(
            '--left-offset',
            `${e.clientX}px`
        )
    };
    e.target.addEventListener("mousemove", mouseMove);

    e.target.addEventListener("mouseup", () => {
        e.target.removeEventListener("mousemove", mouseMove);
    })
});
