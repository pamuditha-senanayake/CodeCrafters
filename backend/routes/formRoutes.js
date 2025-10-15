const express = require("express");
const router = express.Router();

// POST /form/submit
router.post("/submit", (req, res) => {
    const { name } = req.body;

    if (!name || name.trim() === "") {
        return res.status(400).json({ message: "Name cannot be empty." });
    }

    console.log("Received name:", name);
    return res.json({ message: `Hello, ${name}! Your name has been received.` });
});

module.exports = router;
