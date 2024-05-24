"use strict";
const express = require("express");
const app = express();
const morgan = require("morgan");
require("express-async-errors");
const port = 3000;
app.use(morgan("dev"));
app.use(express.json());
let planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    },
];
app.get("/", (req, res) => {
    res.status(200).send(planets);
});
app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});
