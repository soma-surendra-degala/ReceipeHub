const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load .env variables

const sliderRouter = require("./routes/sliderRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const receipeList = require("./routes/receipeList");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Is Connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Use routers
app.use("/slider", sliderRouter);
app.use("/category", categoryRouter);
app.use("/receipeList", receipeList);

// Start server using environment variable for port
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
