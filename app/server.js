
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Home endpoint
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to DevOps Demo Application!",
        status: "Running",
        technology: "Node.js + Express"
    });
});

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Application is healthy"
    });
});

// Users endpoint
app.get("/api/users", (req, res) => {
    res.status(200).json({
        users: [
            { id: 1, name: "Shivam", role: "DevOps Engineer" },
            { id: 2, name: "Rahul", role: "Developer" },
            { id: 3, name: "Amit", role: "Tester" }
        ]
    });
});

// Start server only when executed directly
if (require.main === module) {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;

