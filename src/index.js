const express = require('express')
const configureService = require('./service')
const configureSearchService = require('./searchService')
const configureDetailsService = require('./detailsService')
const configureApi = require('./api')

const PORT = process.env.PORT || 3010
const SERVICES_BASE_URL = process.env.SERVICE_ENDPOINT || 'http://lr-node-kata.herokuapp.com'

const searchService = configureSearchService(SERVICES_BASE_URL)
const detailsService = configureDetailsService(SERVICES_BASE_URL)
const service = configureService(searchService, detailsService)
const api = configureApi(service)

const app = express()
app.use(api)
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
