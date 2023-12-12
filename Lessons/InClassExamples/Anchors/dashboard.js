const query = window.location.search.substring(1); // grab the query string
const parts = search.split("&")
const params = {};
parts.forEach((part) => {
    const newParts = part.split('=');
    params[newParts[0]] = newParts[1];
});

console.log(params);

