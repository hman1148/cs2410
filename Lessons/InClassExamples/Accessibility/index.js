const notes = [];



const fromHTML = (text) => {
    const div = document.createElement("div");
    div.innerHTML = text;
    return div.firstElementChild;
}

document.getElementById("btn").addEventListener("click", () => {
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    const note = {
        title: title.value,
        content: content.value
    } // you will do this on the assignment except it is an object
    notes.push(note);

    const div = fromHTML(`
        <div class = "note" tabindex="0">
            ${title.value}
            <div class = "note-content">
            ${content.value}
            </div>
            <button>Delete</button>
        </div>
    `);

    const eventListener = () => {
            if (div.classList.contains("visible")) {
                div.classList.remove("visible");
            } else {
                div.classList.add("visible");
            }
    }
    document.addEventListener("click", eventListener);
    div.addEventListener("keydown", (e) => {
        if (e.key == ' ') {
            eventListener();
        }
    });

    document.querySelector("button").addEventListener("click", () => {
        div.remove();
        notes.remove(note);
    });

    document.getElementById("print-notes").addEventListener("click", () => {
            //for the assignment pass in the notes object or the object we are using into the print card function
    })
    document.getElementById("output").appendChild(div);
    
});