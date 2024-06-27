const express = require('express');
const path = require('path'); // Added to handle path operations

const app = express();
const PORT = process.env.PORT || 3000; // Use consistent port definition

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
