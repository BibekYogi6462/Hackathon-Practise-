import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From NodeAPI");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://bibek:bibek@backenddb.f3ale31.mongodb.net/?appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to Database");
    app.listen(3000, () => {
      console.log(`Server running on port http://localhost:3000`);
    });
  });
