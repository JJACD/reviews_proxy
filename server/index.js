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





app.listen(port, () => console.log(`istening on http://localhost:${port}`))