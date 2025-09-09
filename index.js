const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO FROM EXPRESS");
});

mongoose
  .connect(
    "mongodb+srv://dadyishome94_db_user:1mDUrlo9wOFy7eTu@cluster0.qtaprfn.mongodb.net/"
  )
  .then(() => {
    console.log("CONNECTED SUCCESSFULLY");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, () => {
  console.log("SERVER RUNNING...");
});
