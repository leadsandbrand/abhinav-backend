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

const allowedOrigins = [
  "http://127.0.0.1:5500",
  "https://abhinavhomes.in"
];

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like Postman / mobile apps)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS: " + origin));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/test", (req, res) => {
  res.send("NEW BACKEND DEPLOYED SUCCESSFULLY");
});


// Home Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);


// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});