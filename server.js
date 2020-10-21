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

app.get('/api/:query/:page', async (req, res, next) => {
  const {query, page} = req.params;
  res.send(await fetcher(query, page))
  res.end();
})

app.listen(port, () => {
  console.log(`server running on ${port}`);
})