const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load .env variables

const sliderRouter = require("./routes/sliderRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const receipeList = require("./routes/receipeList");

const app = express();

// ✅ Enable CORS (important for frontend connection)
app.use(cors({
  origin: "*", // or specify your frontend domain like ["https://receipehub-frontend.onrender.com", "http://localhost:3000"]
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Simple test route (to verify deployment)
app.get("/", (req, res) => {
  res.send("✅ ReceipeHub backend is running successfully!");
});

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database Is Connected"))
  .catch((err) => console.error("Database connection error:", err));

// Use routers
app.use("/slider", sliderRouter);
app.use("/category", categoryRouter);
app.use("/receipeList", receipeList);

// Start server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
