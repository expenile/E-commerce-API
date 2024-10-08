const express = require("express");
const app = express();
require("dotenv").config();
require("./db");
const PORT = process.env.PORT || 8080;

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("E-commerce API running...");
});

app.get("/ping", (req, res) => {
  res.send("PONG");
});


app.use("/products", productRoutes);


app.use("/users",userRoutes);

app.listen(8080, () => {
  console.log("Server is listenin on PORT :" + PORT);
});
