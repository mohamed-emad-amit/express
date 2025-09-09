const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO FROM EXPRESS");
});

app.get("/users", (req, res) => {
  res.json({ message: "users list", data: { users: [] } });
});
app.get("/products", (req, res) => {
  res.json({ message: "products list", data: { products: [] } });
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
