const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors')
const axios = require('axios').default;
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/:productId', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/itemDetails/:productId', (req, res) => {
  axios.get(`http://localhost:5000${req.path}`)
    .then(({ headers, data }) => {
      // handle success
      res.setHeader('content-type', headers['content-type']);
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(`Error: ${err}`);
    });
})

app.listen(port, () => {
  console.log(`Proxy Server listening on port ${port}`);
})