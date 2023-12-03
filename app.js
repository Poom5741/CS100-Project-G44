const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from a directory (e.g., "public")
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
