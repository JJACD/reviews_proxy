const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const cors = require('cors')
const axios = require('axios')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));


/* Review queries */
app.get('/reviews', (req, res) => {
  axios.get('http://http://localhost:9000/reviews')
  .then(({data}) => res.status(200).send(data).end())
  .catch((err) => res.status(400).send(err).end())
})


app.get('/reviews/searchQuery/:id', (req, res) => {
  axios.get(`http://localhost:9000/reviews/searchQuery/${req.params.id}?query=${req.query.query}`)
  .then(({data}) => {console.log(data); res.status(200).send(data).end()})
  .catch((err) => res.status(400).send(err).end())
})

app.get('/reviews/:id', (req, res) => {
  axios.get(`http://localhost:9000/reviews/${req.params.id}`)
  .then(({data}) => res.status(200).send(data).end())
  .catch((err) => res.status(400).send(err).end())
})

app.post('/reviews/:id', (req, res) => {
  axios.post(`http://localhost:9000/reviews/${req.params.id}`, req.body)
  .then(({data}) => res.status(200).send(data).end())
  .catch((err) => res.status(400).send(err).end())
})

app.get('/reviews/rating/:id', (req, res) => {
  axios.get(`http://localhost:9000/reviews/rating/${req.params.id}`)
  .then(({data}) => res.status(200).send(data).end())
  .catch((err) => res.status(400).send(err).end())
})



app.listen(port, () => console.log(`istening on http://localhost:${port}`))