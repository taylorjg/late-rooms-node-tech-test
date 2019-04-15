const express = require('express')
const app = express()
const configureApi = require('./api')
const searchService = require('./searchService')
const detailsService = require('./detailsService')

const PORT = process.env.PORT || 3010

app.use(configureApi(searchService, detailsService))
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
