const output2 = document.getElementById("output2");

let calculation = (loan, interest, time) => {

    let n = 12 * time;
    interest = (interest / 12) / 100;
    return Math.round((loan *  ((interest * ((1 + interest) ** n)) / (((1 + interest) ** n) - 1))) * 100) / 100;
}

const loan = document.getElementById("loan");
const interest = document.getElementById("interest");
const years = document.getElementById("years");

loan.value = 350000;
interest.value = 5.5;
years.value = 30;


const fetchData = () => {

    let loan = document.getElementById("loan");
    let interest = document.getElementById("interest");
    let years = document.getElementById("years");


    if (loan.value == "")  {
        loan.value = 350000;
    } else if (interest.value == "") {
        interest.value = 5.5;
    } else if (years.value == "") {
        years.value = 30;
    }
    if (isNaN(loan.value)) {
        output2.innerHTML = "<p>Please enter a valid laon amount</p>"
    }

    else if (isNaN(interest.value)) {
        output2.innerHTML = "<p>Please enter a valid interest percentage</p>"
    }

    else if (isNaN(years.value)) {
        output2.innerHTML = "<p>Please enter a valid time amount (in months)</p>"
    }

    else {
        let outputCalc = calculation(parseFloat(loan.value), parseFloat(interest.value), parseFloat(years.value));
        output2.innerHTML = `<p>Total Monthly Payment: $${outputCalc}</p>`;
    }
}

fetchData();

loan.addEventListener("blur", () => {
    fetchData();
});
interest.addEventListener("blur", () => {
    fetchData()
});
years.addEventListener("blur", () => {
    fetchData();
});
