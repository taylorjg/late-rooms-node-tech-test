const express = require('express')
const configureSearchService = require('./searchService')
const configureDetailsService = require('./detailsService')
const configureTermService = require('./termService')
const configureTermApi = require('./termApi')

const PORT = process.env.PORT || 3010
const DEFAULT_BASE_URL = 'http://lr-node-kata.herokuapp.com'
const SEARCH_SERVICE_BASE_URL = process.env.SEARCH_SERVICE_BASE_URL || DEFAULT_BASE_URL
const DETAILS_SERVICE_BASE_URL = process.env.DETAILS_SERVICE_BASE_URL || DEFAULT_BASE_URL

const searchService = configureSearchService(SEARCH_SERVICE_BASE_URL)
const detailsService = configureDetailsService(DETAILS_SERVICE_BASE_URL)
const termService = configureTermService(searchService, detailsService)
const termApi = configureTermApi(termService)

const app = express()
app.use(termApi)
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
