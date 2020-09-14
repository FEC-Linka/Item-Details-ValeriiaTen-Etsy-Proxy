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
// Val
app.get('/itemDetails/:productId', (req, res) => {
  axios.get(`http://ec2-3-133-108-106.us-east-2.compute.amazonaws.com${req.path}`)
    .then(({ headers, data }) => {
      // handle success
      res.setHeader('content-type', headers['content-type']);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(`Error for Val: ${err}`);
    });
})

app.get('/info/:productId', (req, res) => {
  axios.get(`http://ec2-3-133-108-106.us-east-2.compute.amazonaws.com${req.path}`)
    .then(({ headers, data }) => {
      // handle success
      res.setHeader('content-type', headers['content-type']);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(`Error: ${err}`);
    });
})
// Zack
// app.get('/pictures', (req, res) => {
//   axios.get(`http://13.56.229.226${req.path}`)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send(`Error: ${err}`);
//     })
// })

// app.get('/reviewPhotos', (req, res) => {
//   axios.get(`http://13.56.229.226${req.path}`)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send(`Error: ${err}`);
//     })
// })

// // Rita
app.get('/reviews/:productId', (req, res) => {
  axios.get(`http://etsy-reviews.rvrita.com${req.path}`)
    .then(({ headers, data }) => {
      res.setHeader('content-type', headers['content-type']);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(`Error: ${err}`);
    })
})

app.get('/review-summary/:productId', (req, res) => {
  axios.get(`http://etsy-reviews.rvrita.com${req.path}`)
    .then(({ headers, data }) => {
      res.setHeader('content-type', headers['content-type']);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(`Error: ${err}`);
    })
})

app.get('/review-list/:productId', (req, res) => {
  axios.get(`http://etsy-reviews.rvrita.com${req.path}`)
    .then(({ headers, data }) => {
      res.setHeader('content-type', headers['content-type']);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(`Error: ${err}`);
    })
})

app.get('/reviews-pictures/:productId', (req, res) => {
  axios.get(`http://etsy-reviews.rvrita.com${req.path}`)
    .then(({ headers, data }) => {
      res.setHeader('content-type', headers['content-type']);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(`Error: ${err}`);
    })
})

// Tammy
app.get('/shipping-api/:productId', (req, res) => {
  axios.get(`http://3.95.162.236${req.path}`)
    .then(({ headers, data }) => {
      res.setHeader('content-type', headers['content-type']);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(`Error: ${err}`);
    })
})

// Header
app.get('/header-bundle.js', (req, res) => {
  axios.get(`https://etsy-header.rvrita.com${req.path}`)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(`Error: ${err}`);
    })
})

// Footer
app.get('/footer-bundle.js', (req, res) => {
  axios.get(`http://etsy-footer.rvrita.com${req.path}`)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(`Error: ${err}`);
    })
})

app.listen(port, () => {
  console.log(`Proxy Server listening on port ${port}`);
})