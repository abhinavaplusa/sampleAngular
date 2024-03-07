const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, '../dist/your-angular-project')));

// Serve index.html for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/your-angular-project/browser/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
