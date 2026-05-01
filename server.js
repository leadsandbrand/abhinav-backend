const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authroutes");
const blogRoutes = require("./routes/blogroutes");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://127.0.0.1:5500",
    "https://abhinavhomes.in"
  ],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Auth Routes
app.use("/api/auth", authRoutes);

// Blog Routes
app.use("/api/blogs", blogRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});