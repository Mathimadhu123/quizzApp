const express = require('express');
const connectDB = require('./config/db'); // Import DB connection
const routes = require('./routers/route');

const app = express();
const port = 3040;

// Middleware
app.use(express.json());

//Routes
app.use('/', routes);

// Connect to MongoDB BEFORE starting the server

const startServer = async () => {
    try {
        await connectDB(); // Wait for DB connection before starting server
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
        app.post('/test', (req, res) => {
            console.log("Received Data:", req.body);
            res.send("Check console for request body!");
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1); // Exit if DB connection fails
    }
};

// Start the server
startServer();
