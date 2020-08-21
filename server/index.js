const express = require('express');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Proxy Server listening on port ${port}`);
})