// Assuming `menuItems` is an array of objects representing menu items
const express = require('express');
const app = express();
const port = 3001;

const menuItems = [
  { id: 1, name: 'Burger', price: 5.99 },
  { id: 2, name: 'Fries', price: 2.49 },
];

app.get('/api/menu-items', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
    res.json(menuItems);
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
