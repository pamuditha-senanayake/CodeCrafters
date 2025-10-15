const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const formRoutes = require("./routes/formRoutes");

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/form", formRoutes); // <-- all routes in formRoutes will be prefixed with /form

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
