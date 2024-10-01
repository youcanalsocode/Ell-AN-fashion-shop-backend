// index.js
const express = require('express');
const cors = require('cors');
const products = require('./data/products');
const axios = require('axios');


const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Route to get all products
app.get('/api/products',async (req, res) => {
try {
  const response=await axios.get('https://dummyjson.com/products');
  res.json(response.data.products);

  
} catch (error) {
  console.error('Error fetching products:', error);
    res.status(500).send('Error fetching products');
}


});

// Route to get product by ID
app.get('/api/products/:id', async(req, res) => {
  const productid=req.params.id;
 try {
  const response=await axios.get(`https://dummyjson.com/products/${productid}`);
  res.json(response.data);

  
 } catch (error) {
  console.error('Error fetching product:', error);
    res.status(404).send('Product not found');
 }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
