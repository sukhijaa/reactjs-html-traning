const express = require('express');
const path = require('path');
const app = express();

const staticPath = path.join(__dirname, 'out');
console.log(`Setting Static Path to : ${staticPath}`);
app.use(express.static(staticPath));

console.log('All routes serving index.html');

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.listen(8888, () => console.log('Server Started Succesfully'));
