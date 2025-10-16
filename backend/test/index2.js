const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

app.post("/reverse", (req, res) => {
    const { array } = req.body;

    console.log("Received array:", array);
    console.log("Received array:", array.reverse());

    res.json({
            reversed: array.reverse()
        });
});


app.post("/calculate", (req, res) => {
    const { array } = req.body;

    if (!Array.isArray(array) || array.length < 2) {
        return res
            .status(400)
            .json({ error: "Array must have at least 3 numbers" });
    }

    // const result = array[0] * array[1] + array[2];

    const [num, times] = array;

    let result = [];
    for (let i = 0; i < times; i++) {
        result.push(num);
    }

    res.json({ result });

});

app.post("/dynamic_array", (req, res) => {
    const { n, queries } = req.body;

    // Step 1: Initialize n empty arrays
    const arr = Array.from({ length: n }, () => []);
    let lastAnswer = 0;
    const answers = [];

    // Step 2: Process each query
    for (let q of queries) {
        const [type, x, y] = q;
        const idx = (x ^ lastAnswer) % n;

        if (type === 1) {
            arr[idx].push(y);
        } else if (type === 2) {
            lastAnswer = arr[idx][y % arr[idx].length];
            answers.push(lastAnswer);
        }
    }

    // Step 3: Return all lastAnswers
    res.json({ result: answers });
});

app.listen(8000, () => console.log("Running on 8000"));
