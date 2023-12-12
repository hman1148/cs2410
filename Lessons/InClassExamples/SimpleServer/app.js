const express = require('express');
const path = require("path");
const app = express();

const users = [
    {
        id: 0,
        name: "Hunter",
        age: 21
    },
    {
        id: 1,
        name: "bob",
        age: 23
    },
    {
        id: 2,
        name: "jack",
        age: 50
    },
]

app.use((req, res, next) => {
    console.log(`Request made ${req.method} to ${req.path}`);
    next();
});

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname, '/profile.html'));
});

app.get("/users", (req, res) => {
    res.json(users);
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});