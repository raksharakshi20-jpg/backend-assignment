const express = require("express");
const fs = require("fs");

const app = express();

const fileName = "text.txt";

app.get("/create", (req, res) => {
    res.send("Created");
});

app.get("/read", (req, res) => {

    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("ERROR!!");
            return res.send("Cannot Read File");
        }

        console.log("Read Successfully!!");

        res.send(data);
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});