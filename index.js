// index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000; // You can change this port if needed

app.use(cors()); // Allow cross-origin requests
app.use(express.json());

// Dummy data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "Description for Product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    description: "Description for Product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    description: "Description for Product 3",
  },
];

// API endpoint to fetch products
app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on http:localhost:${PORT}`);
});
