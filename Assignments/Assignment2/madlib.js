const nounInput = document.getElementById("noun");
const verb1Input = document.getElementById("verb1");
const verb2Input = document.getElementById("verb2");
const adjectiveInput = document.getElementById("adjective");
const objectInput = document.getElementById("object");

const button = document.getElementById("button");
const output = document.getElementById("output");


let madlib = {
    noun: "",
    verb1: "",
    verb2: "",
    adj: "",
    obj: ""
}

button.addEventListener("click", () => {

 
    madlib.noun = nounInput.value;
    madlib.verb1 = verb1Input.value;
    madlib.verb2 = verb2Input.value;
    madlib.adj = adjectiveInput.value;
    madlib.obj = objectInput.value;

    if (madlib.noun == "") {
        output.innerHTML = "<p>You need to enter a noun</p>"
    } else if (madlib.verb1 == "") {
        output.innerHTML = "<p>You need to enter your first verb</p>"
    } else if (madlib.verb2 == "") {
        output.innerHTML = "<p>You need to enter a second verb</p>"
    } else if (madlib.adj == "") {
        output.innerHTML = "<p>You need to enter a adjective</p>"
    } else if (madlib.obj == "") {
        output.innerHTML = "<p>You need to enter an object</p>"
    } else {


        output.innerHTML = `<p>Once upon a time, there was a person named ${madlib.noun}. ${madlib.noun}
        was a very ${madlib.verb1} person. Every day, they went with their favorite ${madlib.verb1} ${madlib.obj}.
        This made ${madlib.noun} very happy. But, one day the ${madlib.verb1} ${madlib.obj} ${madlib.verb2}.
        This made ${madlib.noun} very sad.</p>`
    }   
});

