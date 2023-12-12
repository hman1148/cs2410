const fuddifyButton = document.getElementById("fuddify-button"); //how we grab elements from html and manipulate them with javascript

// every action by the user is followed by an eventlistener 
fuddifyButton.addEventListener("click", () => {
    const div = document.getElementById("output");
    const input = document.getElementById("userInput");

    div.innerHTML = input.value;

});