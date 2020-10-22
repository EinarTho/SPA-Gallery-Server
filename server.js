const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetcher = require('./fetcher')
require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  const {query, page} = req.params;
  res.send('Hei du');
  res.end();
})

app.get('/api/:query/:page', async (req, res, next) => {
  const {query, page} = req.params;
  try {
    console.log('just before fetcher')
    const data = await fetcher(query, page)
    console.log('Just before send', data);
    res.send(data);
  }  catch (e) {
    console.log(e.message);
    res.send("there was an error");
  }
  
  res.end();
})

app.get('/promise/:query/:page', (req, res, next) => {
  const {query, page} = req.params;
  fetcher(query, page)
    .then(data => {
     res.send(data);
     res.end();
    });
})

app.listen(port, () => {
  console.log(`server running on ${port}`);
})