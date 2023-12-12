//electron creates cross-platform desktop apps with windows
const intialQuote = "https://usu-quotes-mimic.vercel.app/api/random";
const form = document.getElementById("floatingInput");
const superDiv = document.getElementById("super-container");
const pinned = [];
const cardBod = document.getElementById("init-card-container");

cardBod.addEventListener("click", (e) => {
    console.log("clicked");
    console.log(e.currentTarget);
    if (cardBod.classList == "pinned") {
        cardBod.classList = "init-card-container";
        
    } else {
        cardBod.classList = "pinned";
    
    }
});

const createElement = (quote, author) => {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");

    div1.classList.add("init-card-container");
    div2.classList.add("card");
    div1.appendChild(div2);

    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");
    divCardBody.id = "intialCard";
    divCardBody.innerText = `\"${quote} - ${author}\"`;
    div2.appendChild(divCardBody);
    div2.setAttribute("aria-description", `${quote} - ${author}`)
    div2.tabIndex = 0;
    superDiv.appendChild(div1);

    div2.addEventListener("click", (e) => {
        if (div1.classList == "pinned") {
            div1.classList = "init-card-container";
        } else {
            div1.classList = "pinned";
            pinned.push(div1);
        }
    });
    div2.addEventListener("keydown", (e) => {
        console.log("clicked")
        if (div1.classList == "pinned" && e.code == "Enter") {
            div1.classList = "init-card-container";
            div1.ariaLive = "unpinned";
            pinned.pop(pinned.indexOf(div1));
        } else if (div1.classList != "pinned" && e.code == "Enter") {
            div1.classList = "pinned";
            div1.ariaLive = "pinned"
            pinned.push(div1);
        }
    });
}

const getInitialRequest = async () => {
    const request = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
    const result = await request.json();
    const intialQuote = document.getElementById("intialCard");

    intialQuote.innerText = `\"${result.content}\" - ${result.author}`;
    intialQuote.setAttribute("aria-description", `${result.content}\" - ${result.author}`);
    intialQuote.tabIndex = 0;
}

const getCustomQuote = async (quote) => {

    const request = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${quote}`);
    const quotes = await request.json();
    console.log(quotes);
    if (request.status >= 400 || quotes.results.length == 0) {
        const errorButton = document.getElementById("errorButton");
        errorButton.click();
        document.getElementById("modal-body").innerText = `Couldn't find \"${form.value}\"`
    } else {
        quotes.results.forEach(element => {
            createElement(element.content, element.author);
        });
    }
}

document.getElementById("modal-close").addEventListener("click", () => {
    location.reload();
});


const savePinnedToDOM = () => {
    pinned.forEach(element => {
        superDiv.appendChild(element);
    });
}
 

form.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("Enter")
        document.body.classList.add("go-up");

        if (superDiv.childElementCount == 0) {
            getCustomQuote(form.value);
        } else {
            superDiv.innerHTML = "";
            savePinnedToDOM();
            getCustomQuote(form.value);
        }
    }
});

getInitialRequest();