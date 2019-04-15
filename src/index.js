const express = require('express')
const app = express()
const configureApi = require('./api')
const configureSearchService = require('./searchService')
const configureDetailsService = require('./detailsService')

const PORT = process.env.PORT || 3010
const SERVICES_BASE_URL = process.env.SERVICE_ENDPOINT || 'http://lr-node-kata.herokuapp.com'

const searchService = configureSearchService(SERVICES_BASE_URL)
const detailsService = configureDetailsService(SERVICES_BASE_URL)

app.use(configureApi(searchService, detailsService))
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
