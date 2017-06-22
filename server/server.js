const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Bullet Journal app listenting on port ${port}!`);
})
