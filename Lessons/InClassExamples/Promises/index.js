const doMath = () => {
    return 2 * 2;
}

const wait =(callback, duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = callback();
            resolve(result);
        }, duration);
    });
}

// const result = wait(doMath, 5000);


// result.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     throw err;
// });


const makeRequest = () => {
    // put loading spinner here 
    // fetch data, .then(takeOffSpinner());
}

const promise = fetch("http://localhost:8000/info.json").then((res) => {
    return res.json();
}).then((person) => {
    document.body.innerHTML = `<h1>Hello ${person.name}</h1>`
});


const getData = async () => {
    try {
        const result = await fetch("https://usu-quotes-mimic.vercel.app//api/random");
        const quote = await result.json();
        console.log(quote);
    } catch(e) {
        console.log(e);
    }
    
}


