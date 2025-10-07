const express = require('express'); 
const app = express(); 
const port = 3000; 

app.get('/', (req, res) => { 
  res.send('Hello, CI/CD Pipeline!'); 
}); 
  
app.listen(port, () => { 
  console.log(`App running on http://localhost:${port}`); 
}); 
  
 module.exports = app; // Export the app for testing