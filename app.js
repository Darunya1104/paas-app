const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello! Welcome to my PaaS Application 🚀</h1><p>This application is deployed using a Platform as a Service.</p>");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});