const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const cors = require('cors')
const axios = require('axios')
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

/* Review queries */




app.listen(port, () => console.log(`listening on http://localhost:${port}`))