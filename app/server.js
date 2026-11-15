
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to My Automated CI/CD Application!",
        status: "Running",
        technology: "Node.js + Express"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Application is healthy"
    });
});

app.get("/api/users", (req, res) => {
    res.status(200).json({
        users: [
            { id: 1, name: "Shivam", role: "DevOps Engineer" },
            { id: 2, name: "Rahul", role: "Developer" },
            { id: 3, name: "Amit", role: "Tester" }
        ]
    });
});

if (require.main === module) {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;

