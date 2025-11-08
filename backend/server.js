const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load env vars
dotenv.config();

// Connect DB
connectDB();

// Initialize app
const app = express();

// Middleware
app.use(cors({ allowOrigin: true }));
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/patient", require("./routes/patientRoutes"));
app.use("/api/doctor", require("./routes/doctorRoutes")); // ✅ use after app declared

// Server listen
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
