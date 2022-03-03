const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
app.use(express.json());
dotenv.config();

const orderRoute = require("./routes/order");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB running succesfully"))
  .catch((err) => {
    console.log(err);
  });
app.use(cors());

app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("backendServer running on port 5000");
});
