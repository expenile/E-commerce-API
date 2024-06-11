const express = require("express");
const app = express();
require("dotenv").config();
require("./db");
const PORT = process.env.PORT || 8080;
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/ping", (req, res) => {
  res.send("PONG");
});
// /products
app.use("/products", productRoutes);
// /users
app.use("/users", userRoutes);

app.listen(8080, () => {
  console.log("Server is listenin on PORT :" + PORT);
});
