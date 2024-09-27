require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./db/db"); 
const cors = require("cors");


const corsOptions = {
  origin: "*", // Allow requests from any origin
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Middleware
app.use(cors(corsOptions)); 
app.use(express.json()); 

// Importing and using the state router
const stateRouter = require("./routes/stater.route");
app.use("/", stateRouter);

const cityRouter = require("./routes/city.routes");
app.use("/" , cityRouter)

const warehouseRouter = require("./routes/warehouse.route")
app.use("/" , warehouseRouter)


const auth = require("./routes/auth.routes.js");
app.use("/" , auth)

// Connect to the database
connectDb()
  .then(() => {
    app.listen(8000, () => {
      console.log("App running on port 8000");
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
